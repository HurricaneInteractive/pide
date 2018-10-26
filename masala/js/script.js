import $ from "jquery";
import axios from 'axios'
import moment from 'moment'
import { listTracks } from './methods/ListTracks'

const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played'

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token

function indieRating(response) {
  console.log(response.data.items[0].track.popularity)
}

function artistPop(response) {
  console.log(response.data.items[0].track.artists[0].name)
}

function bgImage(response) {
  console.log(response.data.items[0].track.album.images[0].url)
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
  })
  .catch(function (error) {
    return 'you done messed up a-a-ron'
  });
}
