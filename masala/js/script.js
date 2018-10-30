import $ from "jquery";
import axios from 'axios'
import moment from 'moment'
import * as circleProgress from 'jquery-circle-progress'
import { listTracks } from './methods/ListTracks'
import { bgImage } from './methods/BgImage'
import { indieRating } from './methods/indieRating'
// import { artistPop } from './methods/artistPop'


const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played'
const artistUrl = 'https://api.spotify.com/v1/artists/'

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token

// function compareGenre(response) {
//   console.log(response.data.items[0].track.popularity)
// }



function artistPop(response) {
  console.log(response.data.items[0].track.artists[0].name)
}

$(document).ready(() => {
  // const i = [1, 2, 3].map(n => n ** 2);
  //
  // console.log(i);

  getSpotifyData();

});

function getSpotifyData() {
  axios({
    method: 'get',
    url: apiUrl,
    params: {
      limit: 50
    },
    headers: {
      Authorization: "Bearer " + AUTH_TOKEN
    }
  })
  .then(function (response) {
    listTracks(response);
    // bgImage(response);
    indieRating(response);

return response.data.items


  })
  .then((items) => {
    // loop and do all the calls.
    let artist = []
    items.forEach((item, i) => {
      let artists = item.track.artists
      if (artists.length > 0) {
        let id = artists[0].id
        artist.push(axios.get(`${artistUrl}${id}`, { headers: { Authorization: "Bearer " + AUTH_TOKEN } }))
      }
    })

    // // array of promises
    axios.all(artist).then(data => {
      data.forEach(({data}, i) => {
        // append
        // console.log(data);
        bgImage(data);
        // artistPop();
      })
    })
  })
  .catch(function (error) {
    return 'you done messed up a-a-ron'
  });
}

$('.circle').circleProgress({
  value: 0.75,
  size: 200,
  lineCap: "round",
  fill: "#fff",
  startAngle: -Math.PI / 2
});

// function getArtistImg() {
//   axios({
//     method: 'get',
//     url: artistUrl,
//     headers: {
//       Authorization: "Bearer " + AUTH_TOKEN
//     }
//   })
//   .then(function (res) {
//
//   })
// }
