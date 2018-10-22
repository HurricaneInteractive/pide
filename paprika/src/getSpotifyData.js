import axios from 'axios'

const AUTH_TOKEN = window.sessionStorage.access_token
// const REFRESH_TOKEN = window.sessionStorage.refresh_token

let allPlaylists = [];
let allPlaylistsObj = {};
let allTracks = [];

const p = ["background: rgb(11, 11, 13)", "color: #1DB954", "border: 1px solid #1DB954", "margin: 8px 0", "padding: 8px 32px 8px 24px", "line-height: 32px"].join(";");

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
      let res = JSON.parse(data);
      console.warn('getAllUserPlaylists => ', res)
      for (let i = 0, len = res.items.length; i < len; i++) {
        const addThisPlaylist = res.items[i];
        allPlaylists.push(addThisPlaylist);

        let pushMe = {
          [res.items[i].id]: res.items[i]
        }
        Object.assign(allPlaylistsObj, pushMe)
      }
      getNumberOfTimesPlaylistsNeedsToBeRun(res.total);
      return [allPlaylists, allPlaylistsObj];
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
      console.log('getPlaylistsRequest() res.data => ', res.data)

      for (let i = 0, len = res.data.items.length; i < len; i++) {
        const addThisPlaylist = res.data.items[i];
        allPlaylists.push(addThisPlaylist);
      }
    });
  }
}

// --------------------------------------------------------------

export function getFirstFiftyPlaylistTracks(playlist_data) {
  // set limit of songs to call
  let maxTrackCall = 50;
  return axios({
    method: 'get',
    url: playlist_data[0].tracks.href,
    params: {
      limit: maxTrackCall
    },
    headers: {
      Authorization: "Bearer " + AUTH_TOKEN
    },
    transformResponse: [function (data) {

      
      // Do whatever you want to transform the data
      let res = JSON.parse(data);
      let playlistLength = 0;
      if (data === undefined) {
        console.error('data undefined -_-')
      }

      if (res.items !== undefined || null) {
        playlistLength = res.items.length
      } else {
        console.log('length undefined', res)
      }
      for (let i = 0, len = playlistLength; i < len; i++) {
        let addPlaylistSongs = res.items[i];

        if (res.items[i] !== null) {
          allTracks.push(addPlaylistSongs);
        } else {
          console.log('null track => ', res.items[i])
        }
      }
      getTheRestPlaylists();
      return allTracks;
    }],
  });

  // get default track data by track_id
  function getTheRestPlaylists() {
    console.log('%c BEFORE for loop (logPlaylists) => ', p)
    // set max playlists to query
    let totalPlaylistsQueried = 50;
    // for loop starts at 1 - playlist_data[0].tracks.href was already run initially
    for (let i = 1; i < totalPlaylistsQueried; i++) {
      getOtherPlaylistsData(playlist_data[i].tracks.href);
    }
    console.log('%c AFTER for loop (logPlaylists) => ', p)
  }

  function getOtherPlaylistsData(url) {
    // sets total tracks to query from playlist
    const totalTracksQueried = 50;
    axios({
      method: 'get',
      url: url,
      params: {
        limit: totalTracksQueried
      },
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
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
          console.log('length undefined', res)
        }
        for (let i = 0, len = playlistLength; i < len; i++) {
          let addPlaylistSongs = res.items[i];
  
          if (res.items[i] !== null) {
            allTracks.push(addPlaylistSongs);
          } else {
            console.log('null track => ', res.items[i])
          }
        }
          
        console.log('%c END of (getOtherPlaylistsData) => ', p)
        return allTracks;
      }],
    });
  }
}

// --------------------------------------------------------------


export function getAllPlaylistDataById(playlist_id) {
  let current_playlist_tracks = [];
  return axios({
    method: 'get',
    url: 'https://api.spotify.com/v1/playlists/' + playlist_id + '/tracks',
    headers: {
      Authorization: "Bearer " + AUTH_TOKEN
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
        console.log('length undefined', res)
      }
      for (let i = 0, len = playlistLength; i < len; i++) {
        let addPlaylistSongs = res.items[i];

        if (res.items[i] !== null) {
          current_playlist_tracks.push(addPlaylistSongs);
        } else {
          console.log('null track => ', res.items[i])
        }
      }
        
      console.log('%c END of (getAllPlaylistDataById) => ', p)
      return current_playlist_tracks;
    }],
  });
}