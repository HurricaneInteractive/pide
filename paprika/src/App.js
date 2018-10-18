import React, { Component } from 'react';
import axios from 'axios'
import './App.scss';
// import filler from './filler.json'

// https://countryflags.io/ could be used to get user location flag

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      user_loading: true,
      playlists: [],
      playlists_2: null,
      playlists_3: null,
      playlists_4: null,
      playlist_loading: true,
      current: null,
      current_loading: true,
      nextCall: 'https://api.spotify.com/v1/users/12162909955/playlists?offset=50&limit=50'
    }
  }

  getPlaylistsRequest(nextOffset) {
    console.log('this.state.nextCall => ', nextOffset)
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
      console.log('res.data => ', res.data)
      console.log('res.data.next => ', res.data.next)
      this.setState({
        playlists: current
      });
    });
  }

  getNumberOfTimesPlaylistsNeedsToBeRun(total) {
    let runThisManyTimes = (Math.ceil(total / 50)) + 1;
    console.warn(runThisManyTimes);

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
      // console.log("axios user => ", user_data)
      this.setState({
        user: user_data,
        user_loading: false
      });
    });

    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/player/currently-playing',
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {
      const current_data = res.data;
      this.setState({
        current: current_data,
        current_loading: false
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
      console.warn('(res.data => ', res.data.items);
      const current = this.state.playlists;
      for (let i = 0, len = res.data.items.length; i < len; i++) {
        const addThisPlaylist = res.data.items[i];
        current.push(addThisPlaylist);
      }

      this.setState({
        playlists: current
      });
      
      console.log('this.state.playlists => ', this.state.playlists)
      console.log('this.state.nextCall => ', this.state.nextCall)
      
      this.getNumberOfTimesPlaylistsNeedsToBeRun(res.data.total);
    })
  }

  mapPlaylistCovers() {
    let data = this.state.playlists;
    console.warn('ALL THE JUICY DATA', data);
    console.log('ALL THE JUICY DATA', data);
    let keys = Object.keys(data);
    console.log('TCL: mapPlaylistCovers -> keys', keys);
    

    let allPlaylistCovers = keys.map(key => {
      const playlist_image = data[key].images[0] || null;

      if (playlist_image === null) {
        console.log('if playlist_image.images === null => ', data[key])
        return null
      }
      return (
        <img style={{width: "100%"}} src={playlist_image.url} key={key} alt={key}/>
      )
    });

    return (
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
        {allPlaylistCovers}
      </div>
    )
  }


  render() {
    if (this.state.loading === true) {
      return <p>loading</p>
    }

    // console.log("this.state.current => ", this.state.current)
    // console.log("AUTH_TOKEN => ", AUTH_TOKEN)
    // console.log("REFRESH_TOKEN => ", REFRESH_TOKEN)
    return (
      <div className="App">
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
        <section className="p-header">
          {this.state.user_loading ? 
            <h5>loading user data</h5>
            :
            <>
              <img className="user-image" src={this.state.user.images[0].url} alt="logo" />
              <h2 style={{textAlign: "center"}}>{this.state.user.display_name}</h2>
            </>
          }
          {this.state.current_loading ?
            <h5>loading current track</h5>
            :
            <div>
              hola
              {this.state.current.item.album.name}
            </div>

          }
        </section>
        <div>
          {this.state.playlist_loading ? 
            <h5>loading</h5>
            : 
            this.mapPlaylistCovers()
          }
        </div>
      </div>
    );
  }
}

export default App;
