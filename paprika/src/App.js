import React, { Component } from 'react';
import {Helmet} from "react-helmet";
// eslint-disable-next-line
import axios from 'axios'
import Parser from 'html-react-parser';
import gradient from 'gradient-color'
import paprikaImg from './content/paprika.jpg'
import black from './content/black.png'
// import filler from './filler.json'
import { getUserData, getAllUserPlaylists, getFirstFiftyPlaylistTracks, getAllPlaylistDataById } from './getSpotifyData'
import { convertDurationToString } from './globalFunctions'
import { ResponsiveBar } from '@nivo/bar'

import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'
 

import Loading from './components/loading'

import './App.scss';

// eslint-disable-next-line
import PlaylistInvididual from './components/playlistIndividual'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faThLarge } from '@fortawesome/free-solid-svg-icons'

library.add(faTh, faThLarge)

// const AUTH_TOKEN = window.sessionStorage.access_token

const music_icon = '<svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path></svg>'
const user_icon = '<svg viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg"><title>Artist Icon</title><path d="M53.043 50.486L46.68 46.83c-.636-.366-1.074-.99-1.2-1.716-.125-.725.077-1.462.555-2.02l5.178-6.072c3.287-3.84 5.097-8.743 5.097-13.803V21.24c0-5.85-2.447-11.497-6.716-15.5C45.266 1.686 39.596-.343 33.66.048c-11.12.718-19.83 10.326-19.83 21.87v1.3c0 5.063 1.81 9.964 5.096 13.802l5.18 6.074c.476.558.678 1.295.553 2.02-.127.723-.563 1.35-1.202 1.717l-12.697 7.3C4.124 57.9 0 64.982 0 72.61v5.92h2.97v-5.92c0-6.562 3.548-12.653 9.265-15.902l12.702-7.3c1.407-.81 2.372-2.19 2.65-3.788.276-1.598-.17-3.22-1.222-4.454l-5.18-6.077C18.356 31.787 16.8 27.57 16.8 23.216v-1.3c0-9.982 7.49-18.287 17.05-18.906 5.124-.326 9.99 1.41 13.712 4.9 3.727 3.493 5.778 8.227 5.778 13.332v1.977c0 4.352-1.557 8.57-4.385 11.872l-5.18 6.074c-1.05 1.234-1.496 2.858-1.22 4.456.278 1.597 1.242 2.977 2.647 3.785l4.51 2.59c1.048-.61 2.16-1.12 3.33-1.51zM66.84 37.133v22.71c-2.038-2.203-4.942-3.592-8.17-3.592-6.143 0-11.14 5-11.14 11.14 0 6.143 4.996 11.14 11.14 11.14 6.142 0 11.14-4.997 11.14-11.14V42.28l8.705 5.027L80 44.732l-13.16-7.6zM58.67 75.56c-4.504 0-8.17-3.664-8.17-8.17 0-4.504 3.664-8.168 8.17-8.168 4.504 0 8.168 3.664 8.168 8.17 0 4.504-3.664 8.168-8.17 8.168z" fill="hsla(0,0%,100%,.6)" fill-rule="evenodd"></path></svg>'
const spotify_icon = '<svg id="bb86c7b8-8e08-4a3d-b957-cd4781c36450" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.49 167.49"><title>Spotify_Icon_RGB_Black</title><path d="M85,1.28A83.75,83.75,0,1,0,168.77,85,83.75,83.75,0,0,0,85,1.28Zm38.4,120.79a5.22,5.22,0,0,1-7.18,1.74c-19.66-12-44.41-14.74-73.56-8.08a5.22,5.22,0,1,1-2.33-10.17c31.9-7.3,59.27-4.16,81.34,9.33A5.22,5.22,0,0,1,123.43,122.07Zm10.25-22.8a6.54,6.54,0,0,1-9,2.15c-22.51-13.84-56.82-17.84-83.45-9.76a6.53,6.53,0,1,1-3.79-12.5c30.41-9.22,68.22-4.75,94.07,11.13A6.54,6.54,0,0,1,133.68,99.27Zm.88-23.75c-27-16-71.52-17.5-97.29-9.68a7.83,7.83,0,1,1-4.54-15c29.58-9,78.75-7.25,109.83,11.2a7.83,7.83,0,0,1-8,13.47Z" transform="translate(-1.28 -1.28)"/></svg>'
const spotify_icon_premium = '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.49 167.49"><title>Spotify_Icon_RGB_Black</title><path d="M85,1.28A83.75,83.75,0,1,0,168.77,85,83.75,83.75,0,0,0,85,1.28Zm38.4,120.79a5.22,5.22,0,0,1-7.18,1.74c-19.66-12-44.41-14.74-73.56-8.08a5.22,5.22,0,1,1-2.33-10.17c31.9-7.3,59.27-4.16,81.34,9.33A5.22,5.22,0,0,1,123.43,122.07Zm10.25-22.8a6.54,6.54,0,0,1-9,2.15c-22.51-13.84-56.82-17.84-83.45-9.76a6.53,6.53,0,1,1-3.79-12.5c30.41-9.22,68.22-4.75,94.07,11.13A6.54,6.54,0,0,1,133.68,99.27Zm.88-23.75c-27-16-71.52-17.5-97.29-9.68a7.83,7.83,0,1,1-4.54-15c29.58-9,78.75-7.25,109.83,11.2a7.83,7.83,0,0,1-8,13.47Z" transform="translate(-1.28 -1.28)"/></svg>'

const p = ["background: rgb(11, 11, 13)", "color: rgb(217, 178, 98)", "border: 1px solid rgb(217, 178, 98)", "margin: 8px 0", "padding: 8px 32px 8px 24px", "line-height: 32px"].join(";");

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      user: null,
      user_loading: true,
      imageLoad: false,
      playlists: [],
      playlist_data_cache: {},
      hidePrivate: false,
      playlist_grid: 4,
      playlists_queried: 0,
      playlist_loading: true,
      playlist_view: false,
      playlists_total: 0,
      artists_queried: [],
      artists_queried_bar: [],
      average_popularity_of_queried_tracks: 0,
      durationTotal_of_queried_tracks: 0,
      total_tracks: 0,
      tracks_loading: true,
      current_playlist: null,
      loadingAnimation: null,
      nextCall: 'https://api.spotify.com/v1/users/12162909955/playlists?offset=50&limit=50',
      isStopped: false,
      isPaused: false
    }
  }

  getNumberOfTimesPlaylistsNeedsToBeRun(total) {
    let runThisManyTimes = (Math.ceil(total / 50)) + 1;

    for (let i = 1; i < runThisManyTimes; i++) {
      let nextNumber = i * 50;
      this.getPlaylistsRequest(nextNumber)
    }
    this.setState({
      playlist_loading: false
    })
  }

  timer = () => setTimeout(() => { // return the timeoutID
    this.setState({
      redirect: true
    })

  }, 5000);

  componentDidMount() {

    console.log("window.sessionStorage.getItem('refresh_token') => ", window.sessionStorage.getItem('refresh_token'))
    console.log("window.sessionStorage.getItem('access_token') => ", window.sessionStorage.getItem('access_token'))
    let userAuthed = false;
    if (window.sessionStorage.getItem('access_token') === 'undefined') {
      userAuthed = false;
      this.setState({
        loggedIn: false
      })
    } else {
      userAuthed = true;
      this.setState({
        loggedIn: true
      })
    }

    // runs functions if user is logged in, else return null
    if (userAuthed) {
      getUserData().then(res => {
        console.log('getUserData() ', res)
        this.setState({
          user: res.data,
          user_loading: false
        });
      });
  
      getAllUserPlaylists().then(res => {
        let totalTracks = 0;
        for (let i = 0; i < res.data[0].length; i++) {
          totalTracks += res.data[0][i].tracks.total;
        }
        console.log('GETALLUSERPLAYLISTS => ', res.data)
        this.setState({
          playlists: res.data[1],
          playlist_loading: false,
          playlists_total: res.data[2],
          total_tracks: totalTracks
        });
  
        // pass in all playlist data as variable
        // get first 50 tracks the first 50 playlists (capped to avoid overloading Spotify API)
        let og_res = res;
        console.log('COMPONENT getAllUserPlaylists() => ', og_res.data[0])

        // returns about 2000k songs - more than enough to play with
        Promise.all(getFirstFiftyPlaylistTracks(og_res.data[0])).then(res => {
          let allTracks = [];
          let artistSet = new Set();
          let pieArray = [];
          let popularityAverage = 0;
          let popularityTotal = 0;
          let durationTotal = 0;
          let release_year_range_min = null;
          let release_year_range_max = null;
          let playlistTracks = [];
          console.warn('getFirstFiftyPlaylistTracks => ', res)
          let totalPlaylistsQuried = res.length;
          let totalTracksQueried = 0;
  
          
          
          for (let i = 0; i < res.length; i++) {
            let addPlaylistSongs = res[i].data;
  
            if (res[i].data !== null) {
              playlistTracks.push(addPlaylistSongs);
              
  
              for (let y = 0; y < res[i].data.length; y++) {
                let invididualTrack = res[i].data[y];
                if (res[i].data[y] !== null) {
                  allTracks.push(invididualTrack);
                  totalTracksQueried++;
                  popularityTotal += invididualTrack.track.popularity;
                  durationTotal += invididualTrack.track.duration_ms;
                  // loops through and extracts release year
                  // checks if the min/max values are smaller/larger and appends if true
                  if (invididualTrack.track.album.release_date !== undefined) {
                    let stringReleaseYear = null;
                    if (invididualTrack.track.album.release_date !== null) {
                      stringReleaseYear = invididualTrack.track.album.release_date.substring(0, 4)
                      if (release_year_range_max === null || release_year_range_min === null){
                        release_year_range_max = stringReleaseYear;
                        release_year_range_min = stringReleaseYear;
                      }
                      if (release_year_range_min > stringReleaseYear) {
                        release_year_range_min = stringReleaseYear
                      }
                      if (release_year_range_max < stringReleaseYear) {
                        release_year_range_max = stringReleaseYear
                      }
                    }
                  }
  
                  // loops through artists array and adds them to the aristSet Set (unique vals only)
                  for (let b = 0; b < invididualTrack.track.artists.length; b++) {
                    artistSet.add(invididualTrack.track.artists[b].name);
                    
                    pieArray.push(invididualTrack.track.artists[b].name)
                  }
                } else {
                  console.log('null track => ', res[i].data[y]);
                }
                
              }
            } else {
              console.warn('null track => ', res.items[i])
            } 
          }

          function compressArrayLocal(original) {
 
            let compressed = [];
            let compressedObjectGlobal = {};
            let arrayCopy = original.slice(0);
           
            for (let i = 0; i < original.length; i++) {
           
              let myCount = 0;	
              for (let w = 0; w < arrayCopy.length; w++) {
                if (original[i] === arrayCopy[w]) {
                  myCount++;
                  delete arrayCopy[w];
                }
              }
              let getColour = gradient([
                '#17A467', '#47CA51', '#88DA73'
              ], original.length)

              if (myCount > 0) {
                if (original[i] !== null) {
                  
                  let a = {
                    'key': original[i],
                    'artist': original[i],
                    'id': original[i],
                    'TracksBy': myCount,
                    'artistColor': getColour[i]
                  }
                  compressed.push(a);
                  const pushToObj = {
                    [original[i]]: {
                      'id': original[i],
                      'label': original[i],
                      'value': myCount,
                      'color': getColour[i]
                    }
                  }
                  const oldObj = compressedObjectGlobal;
                  const compressedObject = Object.assign(oldObj, pushToObj);
                  compressedObjectGlobal = compressedObject;
                }
              }
            }
            return {'array': compressed, 'obj': compressedObjectGlobal};
          };

          let filteredArtistData = compressArrayLocal(pieArray);
          popularityAverage = popularityTotal / allTracks.length;
          let convertedDuration = convertDurationToString(durationTotal).timeString;

          this.setState({
            tracks: allTracks,
            tracks_queried_length: totalTracksQueried,
            playlists_queried: totalPlaylistsQuried,
            artists_queried: artistSet,
            artists_queried_bar: filteredArtistData.array,
            average_popularity_of_queried_tracks: popularityAverage,
            release_year_range_min: release_year_range_min,
            release_year_range_max: release_year_range_max,
            tracks_loading: false,
            durationTotal_of_queried_tracks: convertedDuration
          });
        })
      });
    } 
  }

  testThisOut(data) {
    console.log('testThisOut => ', data)
  }

  checkTrackStats(data) {
    console.log('checkTrackStats(data)')
  }

  getGridSize(number) {
    let grid = '1fr '.repeat(number);
    return grid
  }
  
  changeGridAmount(val) {
    if (val === 'down') {
      this.setState({
        playlist_grid: this.state.playlist_grid - 1 
      })
    } else {
      this.setState({
        playlist_grid: this.state.playlist_grid + 1 
      })
    }
    this.getGridSize(this.state.playlist_grid);
  }

  mapPlaylistCovers() {
    let data = this.state.playlists;
    let keys = Object.keys(data);

    let allPlaylistCovers = keys.map(key => {
      const playlist_image = data[key].images[0] || null;
      let imageURL = paprikaImg;
      let display_name = 'user';

      if (playlist_image !== null) {
        imageURL = playlist_image.url;
      }
      if (data[key].owner.display_name !== null) {
        display_name = data[key].owner.display_name
      }
      if (this.state.hidePrivate) {
        if (data[key].public === false) {
          return null
        }
      }
      return (
        <div className="playlist_single_container" key={key} >
          <div onClick={() => this.openPlaylist(data[key])} className="playlist_image">
            <img className="background_placeholder" src={black} alt="background"/>
            <div className="actual_image">
              <img
                src={imageURL}
                key={key}
                alt={key}
              />
            </div>
            <div className="playlist_image_overlay">{Parser(music_icon)}</div>
          </div>
          <div className="playlist_title">
            <h4 onClick={() => this.openPlaylist(data[key])}>{data[key].name}</h4>
            <h6>{display_name}</h6>
          </div>
        </div>
      )
    });

    return (
      <div style={{display: "grid", gridTemplateColumns: this.getGridSize(this.state.playlist_grid)}}>
        {allPlaylistCovers}
      </div>
    )
  }


  openPlaylist(val) {
    let currentID = val.id;
    console.log('this.state.playlist_data_cache.currentID => ', this.state.playlist_data_cache.currentID)
    if (this.state.playlist_data_cache.currentID === null) {
      console.log('item doesnt exist, fetch the data')
    }
    else {
      console.log('item already exists')
    }
    let currentPlaylistMeta = this.state.playlist_data_cache.currentID;
    console.log('TCL: App -> openPlaylist -> currentPlaylistMeta', currentPlaylistMeta);
    
    getAllPlaylistDataById(currentID).then(res => {
      console.log('getAllPlaylistDataById => ', res.data);
      let currentCache = this.state.playlist_data_cache;
      let pushMe = {
        [currentID]: res.data
      }
      Object.assign(currentCache, pushMe)
      // cacheMe.push(pushMe)
      this.setState({
        playlist_data_cache: currentCache
      });
      console.log('this.state.playlist_data_cache => ', this.state.playlist_data_cache)
    });

    console.log('open playlist (val) => ', val)
    this.setState({ playlist_view: true, current_playlist: val });
  }

  showPlaylistView = () => {
    this.setState({ playlist_view: true });
  };

  hidePlaylistView = () => {
    this.setState({ playlist_view: false });
  };

  togglePrivatePlaylists = (toggle) => {
    this.setState({ hidePrivate: toggle})
  }

  render() {
    if (this.state.loading === true) {
      return <p>loading</p>
    }

    if (this.state.loggedIn === false) {
      return (
        <div className="app no_user">
          <div className="absolute-background"/>
          <div className="app-container">
            <h1>no user data</h1>
            {/* redirect back to login page */}
            <a href="/login"><button>Please Login</button></a>
          </div>
        </div>
      )
    }

    return (
      <>
        <Helmet
          title='Paprika'
          meta={[
            { name: 'title', content: 'Paprika' },
            { name: 'theme-color', content: '#1DB954' }
          ]}
        />
        <div className="app">

          <div className="absolute-background"/>

          {this.state.playlist_view ?
            <PlaylistInvididual
              show={this.state.playlist_view}
              hidePlaylistView={this.hidePlaylistView}
              data={this.state.current_playlist}
            />
            :
            null
          }

          <div className="app-container">
            <header className="bg-white">
              <nav className="main-menu p-v-10 container">
                <a className="logo" href="/" title="Go Home"><h1 className="m-0 c-black"><span className="hide-text">Pide</span>Pide</h1></a>
                <ul className="menu p-0 m-0 cf">
                  <li><a href="/cumin">Cumin</a></li>
                  <li><a href="/masala">Masala</a></li>
                  <li><a href="/paprika">Paprika</a></li>
                </ul>
              </nav>
            </header>
            <section className="user-header">
              
              {this.state.user_loading ? 
                <>
                  <div className="user-loading" >
                    {Parser(user_icon)}
                  </div>
                  <h1 style={{textAlign: "center"}}>User</h1>
                  <h4> </h4>
                </>
                :
                <>
                  <img className="user-image" src={this.state.user.images[0].url} alt="logo" />
                  <h1 style={{textAlign: "center"}}>{this.state.user.display_name}</h1>
                  <p className="tracks_playlists">{this.state.total_tracks} tracks - {this.state.playlists_total} playlists</p>
                  <div className="status_icons">
                    {this.state.user.product === 'premium' ?
                      <div id="premium" className="spotify_icon_div">
                        {Parser(spotify_icon_premium)}
                        <p>Spotify Premium</p>
                      </div>
                      :
                      <div id="free" className="spotify_icon_div">
                        {Parser(spotify_icon)}
                        <p>Spotify Free</p>
                      </div>
                    }
                    <div className="country_flag">
                      <img src={"https://www.countryflags.io/" + this.state.user.country + "/flat/24.png"} alt="https://www.countryflags.io/be/flat/64.png"/>
                      <p>Country {this.state.user.country}</p>
                    </div>
                    {/* <Loading/> */}
                  </div>
                </>
              }
            </section>

            <div className="top_playlists_container">
              <div className="header">
                <h2>A smal chunck of stats</h2>
                <h6>Based on {this.state.tracks_queried_length} tracks from your first {this.state.playlists_queried} playlists</h6>
              </div>
              <div className="top_playlists_content">
                {this.state.tracks_loading ?
                  <>
                    <ul className="artists_bar_graph">
                      <li className="artists_bar_container">
                        <h3>load</h3>

                      </li>
                    </ul>
                    <ul className="stats_items">
                      <li>
                        <h3>load</h3>
                        <p></p>
                      </li>
                      <li> 
                        <h3>load</h3>
                        <p></p>
                      </li>
                      <li className="release_years">
                        <h3>load</h3>
                        <p></p>
                      </li>
                    </ul>
                  </>
                  :
                  <>
                    <ul className="artists_bar_graph">
                      <li className="artists_bar_container">
                      <h3>Artist tracks volume ({this.state.artists_queried.size})</h3>
                      <ResponsiveBar
                          data={this.state.artists_queried_bar}
                          keys={[
                            "artist",
                            "TracksBy"
                          ]}
                          indexBy="artist"
                          margin={{
                              "top": 50,
                              "right": 48,
                              "bottom": 50,
                              "left": 48
                          }}
                          axisBottom={false}
                          axisTop={false}
                          axisLeft={false}
                          axisRight={false}
                          padding={0.2}
                          colors="nivo"
                          colorBy={({ data }) => data['artistColor']}
                          borderColor="inherit:darker(1.6)"
                          labelSkipWidth={12}
                          labelSkipHeight={12}
                          labelTextColor="transparent"
                          animate={true}
                          motionStiffness={90}
                          motionDamping={15}
                      />
                      </li>
                    </ul>
                    <ul className="stats_items">
                      <li>
                        <h3>{this.state.durationTotal_of_queried_tracks}</h3>
                        <p>total time</p>
                      </li>
                      <li> 
                        <h3>{Math.round(this.state.average_popularity_of_queried_tracks)}%</h3>
                        <p>average popularity</p>
                      </li>
                      <li className="release_years">
                        <h3>{this.state.release_year_range_min} -  {this.state.release_year_range_max}</h3>
                        <p>release date range</p>
                      </li>
                    </ul>
                  </>
                }
              </div>

            </div>

            <div className="playlist_container">
              <div className="playlist_header">
                <h2>User Playlists</h2>
                <div className="layout_size">
                  {this.state.hidePrivate ?
                    <p className="hide_private disabled" onClick={() => this.togglePrivatePlaylists(false)}>show private playlists</p>
                    :
                    <p className="hide_private enabled" onClick={() => this.togglePrivatePlaylists(true)}>hide private playlists</p>
                  }
                  {this.state.playlist_grid >= 7 ?
                    <div className="button disabled"><FontAwesomeIcon icon="th" /></div>
                    :
                    <div className="button enabled" onClick={() => this.changeGridAmount('up')}><FontAwesomeIcon icon="th"/></div>
                  }
                  {this.state.playlist_grid <= 3 ?
                    <div className="button disabled"><FontAwesomeIcon icon="th-large" /></div>
                    :
                    <div className="button enabled" onClick={() => this.changeGridAmount('down')}><FontAwesomeIcon icon="th-large" /></div>
                  }
                </div>
              </div>
              {this.state.playlist_loading ? 
                <h5>loading playlist data</h5>
                : 
                this.mapPlaylistCovers()
              }
              <h2 onClick={() => scroll.scrollToTop({
                duration: 1500,
                delay: 100,
                smooth: "easeInOutQuint",
              })}>jump to top</h2>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default App;
