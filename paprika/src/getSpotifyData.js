import axios from 'axios'

const AUTH_TOKEN = window.sessionStorage.access_token
// const REFRESH_TOKEN = window.sessionStorage.refresh_token

let allPlaylists = [];
let allTracks = [];
let allTracksExtensive = [];

export function getUserData(val){
  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me',
    headers: {
      Authorization: "Bearer " + AUTH_TOKEN
    }
  });
}

// --------------------------------------------------------------

export function getAllUserPlaylists() {
  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me/playlists',
    params: {
      limit: 50,
      offset: 0
    },
    headers: {
      Authorization: "Bearer " + AUTH_TOKEN
    },
    transformResponse: [function (data) {
      // Do whatever you want to transform the data
      let res = JSON.parse(data);
      console.log('res => ', res)
      for (let i = 0, len = res.items.length; i < len; i++) {
        const addThisPlaylist = res.items[i];
        allPlaylists.push(addThisPlaylist);
      }
      getNumberOfTimesPlaylistsNeedsToBeRun(res.total);
      return allPlaylists
    }],
  });

  function getNumberOfTimesPlaylistsNeedsToBeRun(total) {
    console.log('we running getNumberOfTimesPlaylistsNeedsToBeRun(total) =>', total)
    let runThisManyTimes = (Math.ceil(total / 50)) + 1;

    for (let i = 1; i < runThisManyTimes; i++) {
      let nextNumber = i * 50;
      getPlaylistsRequest(nextNumber)
    }
  }

  // get default track data by track_id
  function trackReqRegular(url) {
    axios({
      method: 'get',
      url: url,
      // url: 'https://api.spotify.com/v1/users/12162909955/playlists?offset=50&limit=50',
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      },
      transformResponse: [function (data) {
        // Do whatever you want to transform the data
        let res = JSON.parse(data);
        for (let i = 0, len = res.items.length; i < len; i++) {
          const addPlaylistSongs = res.items[i];
          const track_id = res.items[i].track.id;
          allTracks.push(addPlaylistSongs);
          trackReqExtensive(track_id);
        }
        console.log('allTracks => ', allTracks)
      }],
    });
  }

  // audio feature by track_id
  function trackReqExtensive(track_id) {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/audio-features/' + track_id,
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      },
      transformResponse: [function (data) {
        // Do whatever you want to transform the data
        let res = JSON.parse(data);
        console.log('res => ', res)
        const addPlaylistSongs = res;
        allTracksExtensive.push(addPlaylistSongs);
      }],
    });
  }

  // get all users playlists
  function getPlaylistsRequest(nextOffset) {
    return axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/playlists',
      params: {
        offset: nextOffset,
        limit: 50
      },
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {

      for (let i = 0, len = res.data.items.length; i < len; i++) {
        const addThisPlaylist = res.data.items[i];
        allPlaylists.push(addThisPlaylist);
        // run get tracks function
        setInterval(() => {
          console.log('running on setInterval 2000ms')
        }, 2000);
        setTimeout(() => {
          console.log('running on setTimeout 2000ms')
        }, 2000);
        setTimeout(() => {
          console.log('running on setTimeout 5000ms')
        }, 5000);
        setTimeout(() => {
          console.log('running on setTimeout 7000ms')
        }, 7000);
        // setTimeout(() => {
        //   trackReqRegular(addThisPlaylist.tracks.href)
        // }, 5000);
      }
    });
  }
}