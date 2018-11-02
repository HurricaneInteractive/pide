import axios from 'axios'

let allPlaylists = [];
let allPlaylistsObj = {};

const p = ["background: rgb(11, 11, 13)", "color: #1DB954", "border: 1px solid #1DB954", "margin: 8px 0", "padding: 8px 32px 8px 24px", "line-height: 32px"].join(";");

// --------------------------------------------------------------

export function getUserData(val){
  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/me',
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem('access_token')
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
      Authorization: "Bearer " + window.sessionStorage.getItem('access_token')
    },
    transformResponse: [function (data) {
      let res = JSON.parse(data);
      // res = {};
      if (res === undefined
        || res === null
        || res.length === 0
        || res.items === undefined
        || res.items === null
        || res.items.length === 0
      ) {
        alert('Error - please create or follow at least one playlist on Spotify - thank you xo')
        return null
      }
      let totalToQuery = 10;
      for (let i = 0, len = res.items.length; i < len; i++) {
        const addThisPlaylist = res.items[i];
        allPlaylists.push(addThisPlaylist);

        let pushMe = {
          [res.items[i].id]: res.items[i]
        }
        Object.assign(allPlaylistsObj, pushMe)
      }
      getNumberOfTimesPlaylistsNeedsToBeRun(totalToQuery);
      // any values returned here are sent back to react
      return [allPlaylists, allPlaylistsObj, totalToQuery];
    }],
  });

  function getNumberOfTimesPlaylistsNeedsToBeRun(total) {
    let runThisManyTimes = (Math.ceil(total / 50)) + 1;

    for (let i = 1; i < runThisManyTimes; i++) {
      let nextNumber = i * 50;
      getPlaylistsRequest(nextNumber)
    }
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
        Authorization: "Bearer " + window.sessionStorage.getItem('access_token')
      },
      transformResponse: [function (data) {
        let res = JSON.parse(data);
        if (res.items.length === undefined) {
          console.log('res.items.length === undefined')
        }
        for (let i = 0, len = res.items.length; i < len; i++) {
          const addThisPlaylist = res.items[i];
          allPlaylists.push(addThisPlaylist);
  
          let pushMe = {
            [res.items[i].id]: res.items[i]
          }
          Object.assign(allPlaylistsObj, pushMe)
        }
        // any values returned here are sent back to react
        return [allPlaylists, allPlaylistsObj, res.total];
      }],
    });
  }
}

// --------------------------------------------------------------

export function getFirstFiftyPlaylistTracks(playlist_data) {
  let promises = [];

  function requestPlaylistData(url) {
    return axios({
      method: 'get',
      url: url,
      params: {
        limit: 2
      },
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem('access_token')
      },
      transformResponse: [function (data) {
        // Parse raw data from string to JSON
        let res = JSON.parse(data);
        return res.items
      }],
    })
  }

  for (let i = 0; i < 20; i++) {
    promises.push(requestPlaylistData(playlist_data[i].tracks.href));
  }
  return promises
}

// --------------------------------------------------------------


export function getAllPlaylistDataById(playlist_id) {
  let current_playlist_tracks = [];
  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/playlists/' + playlist_id + '/tracks',
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem('access_token')
    },
    transformResponse: [function (data) {
      // parses the RAW string data into a JSON object
      let res = JSON.parse(data);
      let playlistLength = 0;
      if (data === undefined) {
        console.error('data undefined -_-')
      }

      if (res.items !== undefined || null) {
        playlistLength = res.items.length
      } else {
        console.error('length undefined', res)
      }
      for (let i = 0, len = playlistLength; i < len; i++) {
        let addPlaylistSongs = res.items[i];

        if (res.items[i] !== null) {
          current_playlist_tracks.push(addPlaylistSongs);
        } else {
          console.warn('null track => ', res.items[i])
        }
      }
      return current_playlist_tracks;
    }],
  });
}

// --------------------------------------------------------------


export function getArtistsById(artists_array) {
  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/artists',
    params: {
      ids: artists_array.toString()
    },
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem('access_token')
    }
  });
}