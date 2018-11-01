require('dotenv').config()
let express = require('express')
let path = require('path')
let request = require('request')
let morgan = require('morgan')
let cors = require('cors')
let querystring = require('querystring')
let cookieParser = require('cookie-parser')

let port = process.env.PORT;
if (port === null || port === '') {
	port = 8000
}

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
let generateRandomString = function(length) {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

var stateKey = 'spotify_auth_state';
var client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
var client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
var redirect_uri = process.env.SPOTIY_REDIRECT_URI; // Your redirect uri

let app = express()

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname + '/public')))
	.use(express.static(path.join(__dirname + '/public/cumin')))
	.use(express.static(path.join(__dirname + '/public/paprika')))
	.use(express.static(path.join(__dirname + '/public/masala')))
	.use(cors())
	.use(cookieParser())

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/cumin', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/cumin/index.html'))
})
app.get('/paprika', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/paprika/index.html'))
})
app.get('/masala', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/masala/index.html'))
})

app.get('/login', function(req, res) {

	let state = generateRandomString(16);
	res.cookie(stateKey, state);
  
	// your application requests authorization
	let scope = 'user-read-private user-read-email user-follow-read playlist-read-private playlist-read-collaborative user-library-read user-top-read user-read-recently-played';
	res.redirect('https://accounts.spotify.com/authorize?' +
		querystring.stringify({
			response_type: 'code',
			client_id: client_id,
			scope: scope,
			redirect_uri: redirect_uri,
			state: state
		}));
});

app.get('/callback', function(req, res) {

	// your application requests refresh and access tokens
	// after checking the state parameter
  
	var code = req.query.code || null;
	var state = req.query.state || null;
	var storedState = req.cookies ? req.cookies[stateKey] : null;
  
	if (state === null || state !== storedState) {
	  	res.redirect('/#' +
			querystring.stringify({
				error: 'state_mismatch'
			}));
	} 
	else {
		res.clearCookie(stateKey);
		var authOptions = {
			url: 'https://accounts.spotify.com/api/token',
			form: {
				code: code,
				redirect_uri: redirect_uri,
				grant_type: 'authorization_code'
			},
			headers: {
				'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
			},
			json: true
		};
	
		request.post(authOptions, function(error, response, body) {
			if (!error && response.statusCode === 200) {
	
				var access_token = body.access_token,
					refresh_token = body.refresh_token;
		
				// var options = {
				// 	url: 'https://api.spotify.com/v1/me',
				// 	headers: { 'Authorization': 'Bearer ' + access_token },
				// 	json: true
				// };
		
				// // use the access token to access the Spotify Web API
				// request.get(options, function(error, response, body) {
				// 	console.log(body);
				// });
		
				// we can also pass the token to the browser to make requests from there
				res.redirect('/#' +
					querystring.stringify({
						access_token: access_token,
						refresh_token: refresh_token
					}));
			}
			else {
				res.redirect('/#' +
					querystring.stringify({
						error: 'invalid_token'
					}));
			}
		});
	}
});
  
app.get('/refresh_token', function(req, res) {
  
	// requesting access token from refresh token
	var refresh_token = req.query.refresh_token;
	var authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
		form: {
			grant_type: 'refresh_token',
			refresh_token: refresh_token
		},
		json: true
	};
  
	request.post(authOptions, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			var access_token = body.access_token;
			res.send({
				'access_token': access_token
			});
		}
	});
});

app.listen(port)