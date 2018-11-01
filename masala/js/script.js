import $ from "jquery";
import axios from 'axios'
import moment from 'moment'
import * as circleProgress from 'jquery-circle-progress'
import { listTracks } from './methods/ListTracks'
import { bgImage } from './methods/BgImage'
import { indieRating } from './methods/indieRating'
import { artistPop } from './methods/artistPop'


const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played'
const artistUrl = 'https://api.spotify.com/v1/artists/'

// const AUTH_TOKEN = window.sessionStorage.access_token

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
      Authorization: "Bearer " + window.sessionStorage.getItem('access_token')
    }
  })
  .then(function (response) {
    listTracks(response)
    indieRating(response)
    // artistPop(response)

    return response.data.items


  })
  .then((items) => {
    // loop and do all the calls.
    let promises = []
    items.forEach((item, i) => {
      let artists = item.track.artists
      if (artists.length > 0) {
        let id = artists[0].id
        promises.push(axios.get(`${artistUrl}${id}`, { headers: { Authorization: "Bearer " + window.sessionStorage.getItem('access_token') } }))
      }
    })

    // // array of promises
    axios.all(promises).then(data => {
      // console.log(data)
      artistPop(data)
      data.forEach(({data}, i) => {
        // append
        if (i === 0) {
          bgImage(data)
        }
      })
    })
  })
  .catch(function (error) {
    return 'you done messed up a-a-ron'
  });
}

$('.artist-see-all').click(function() {
  $('#artists').toggleClass('artist-active')
});
