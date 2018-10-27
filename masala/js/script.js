import $ from "jquery";
import axios from 'axios'
import moment from 'moment'
import { listTracks } from './methods/ListTracks'
import { bgImage } from './methods/BgImage'

const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played'
const artistUrl = 'https://api.spotify.com/v1/artists/{id}'

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token

function indieRating(response) {
  console.log(response.data.items[0].track.popularity)
}

function artistPop(response) {
  console.log(response.data.items[0].track.artists[0].name)
}

$(document).ready(() => {
  // const i = [1, 2, 3].map(n => n ** 2);
  //
  // console.log(i);

  getSpotifyData();
  // getArtistImg();

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
    bgImage(response);
  })
  .catch(function (error) {
    return 'you done messed up a-a-ron'
  });
}

// function getArtistImg() {
//   axios({
//     method: 'get',
//     url: artistUrl,
//     headers: {
//       Authorization: "Bearer " + AUTH_TOKEN
//     }
//   })
// }
