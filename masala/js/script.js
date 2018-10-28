import $ from "jquery";
import axios from 'axios'
import moment from 'moment'
import { listTracks } from './methods/ListTracks'
import { bgImage } from './methods/BgImage'
import { indieRating } from './methods/indieRating'

const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played'
const artistUrl = 'https://api.spotify.com/v1/artists/'

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token

function compareGenre(response) {
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
    indieRating(response);
    // loop through the tracks

    // response.data.items[0].forEach((track, i) => {
    //   const id = track.artists[0].id
    //   axios(url).then(data => console.log(data))
    //   return response.data.items
    //
    //   console.log(response)
    // })



  })
  // .then((items) => {
  //   // loop and do all the calls.
  //   // let artist = []
  //   // items.forEach((item, i) => {
  //   //   let id = item.track.artist[0].id
  //   //   artist.push(axios.get(`${artistUrl}${id}`))
  //   // })
  //
  //
  //   // // array of promises
  //   // axios.all(artist).then(data => {
  //   //   data.forEach((item, i) => {
  //   //     // append
  //   //   })
  //   // })
  //
  //   return items
  //   console.log(items)
  //
  // })
  // .then((items) => {
  //   // another group of calls
  // })
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
//   .then(function (res) {
//
//   })
// }
