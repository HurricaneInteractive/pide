import React, { Component } from 'react';
import axios from 'axios'
import Parser from 'html-react-parser';
import './App.scss';
import paprikaImg from './content/paprika.jpg'
// import filler from './filler.json'

import PlaylistInvididual from './components/playlistIndividual'

// https://countryflags.io/ could be used to get user location flag

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token

const music_icon = '<svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg"><title>Playlist Icon</title><path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path></svg>'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      user_loading: true,
      playlists: [],
      playlists_total: 0,
      playlist_loading: true,
      playlist_view: false,
      current_playlist: null,
      nextCall: 'https://api.spotify.com/v1/users/12162909955/playlists?offset=50&limit=50'
    }
  }

  getPlaylistsRequest(nextOffset) {
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/users/12162909955/playlists',
      params: {
        offset: nextOffset,
        limit: 50
      },
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {
      const current = this.state.playlists;

      for (let i = 0, len = res.data.items.length; i < len; i++) {
        const addThisPlaylist = res.data.items[i];
        current.push(addThisPlaylist);
      }
      this.setState({
        playlists: current
      });
    });
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

  componentDidMount() {

    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me',
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {
      const user_data = res.data;
      this.setState({
        user: user_data,
        user_loading: false
      });
    });

    // playlist requests
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/playlists',
      params: {
        limit: 50,
        offset: 0
      },
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {
      const current = this.state.playlists;
      for (let i = 0, len = res.data.items.length; i < len; i++) {
        const addThisPlaylist = res.data.items[i];
        current.push(addThisPlaylist);
      }

      this.setState({
        playlists: current,
        playlists_total: res.data.total
      });
      
      this.getNumberOfTimesPlaylistsNeedsToBeRun(res.data.total);
    })
  }

  mapPlaylistCovers() {
    let data = this.state.playlists;
    let keys = Object.keys(data);

    let allPlaylistCovers = keys.map(key => {
      const playlist_image = data[key].images[0] || null;
      let imageURL = paprikaImg;

      if (playlist_image !== null) {
        imageURL = playlist_image.url;
      }
      return (
        <div className="playlist_single_container" key={key}>
          <div onClick={() => this.openPlaylist(data[key])} className="playlist_image">
            <img src={imageURL} key={key} alt={key}/>
            <div className="playlist_image_overlay">{Parser(music_icon)}</div>
          </div>
          <div className="playlist_title">
            <h4 onClick={() => this.openPlaylist(data[key])}>{data[key].name}</h4>
            <h6>{data[key].owner.display_name}</h6>
          </div>
        </div>
      )
    });

    return (
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
        {allPlaylistCovers}
      </div>
    )
  }


  openPlaylist(val) {
    console.log('open playlist (val) => ', val)
    this.setState({ playlist_view: true, current_playlist: val });
  }

  showPlaylistView = () => {
    this.setState({ playlist_view: true });
  };

  hidePlaylistView = () => {
    this.setState({ playlist_view: false });
  };


  render() {
    if (this.state.loading === true) {
      return <p>loading</p>
    }

    // console.log("this.state.current => ", this.state.current)
    // console.log("AUTH_TOKEN => ", AUTH_TOKEN)
    // console.log("REFRESH_TOKEN => ", REFRESH_TOKEN)
    return (
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
              <h5>loading user data</h5>
              :
              <>
                <img className="user-image" src={this.state.user.images[0].url} alt="logo" />
                <h1 style={{textAlign: "center"}}>{this.state.user.display_name}</h1>
                <h4>{this.state.playlists_total} total playlists</h4>
              </>
            }
          </section>
          <div className="playlist_container">
            {this.state.playlist_loading ? 
              <h5>loading</h5>
              : 
              this.mapPlaylistCovers()
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
