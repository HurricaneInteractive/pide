let express = require('express')
let path = require('path')
let morgan = require('morgan')

let app = express()
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.static(path.join(__dirname + '/public/cumin')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/cumin', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/cumin/index.html'))
})

app.listen(3000)