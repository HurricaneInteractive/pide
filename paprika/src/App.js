import React, { Component } from 'react';
import axios from 'axios'
import './App.scss';

// https://countryflags.io/ could be used to get user location flag

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      user_loading: true,
      playlists: null,
      playlists_20: null,
      playlist_loading: true,
      current: null,
      current_loading: true,
    }
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
      console.log("axios user => ", user_data)
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
      console.log("res.data => ", res.data)
      const current_data = res.data;
      console.log("axios current => ", current_data)
      this.setState({
        current: current_data,
        current_loading: false
      });
    });

    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/playlists',
      params: {
        offset: 0
      },
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {
      const playlists = res.data;
      this.setState({
        playlists: playlists,
        // loading: false
      });
      axios({
        method: 'get',
        url: 'https://api.spotify.com/v1/me/playlists',
        params: {
          offset: 20
        },
        headers: {
          Authorization: "Bearer " + AUTH_TOKEN
        }
      }).then(res => {
        const playlists_20 = res.data;
        this.setState({
          playlists_20: playlists_20,
          playlist_loading: false
        });
      })
    })
  }

  mapPlaylistCovers() {
    let data = this.state.playlists;
    let data_20 = this.state.playlists_20;
    let keys = Object.keys(data.items);
    let keys_20 = Object.keys(data_20.items);

    let allPlaylistCovers = keys.map(key => {
      const playlist_image = data.items[key].images[0].url;
      return (
        <img style={{width: "100%"}} src={playlist_image} key={key} alt={key}/>
      )
    });

    let allPlaylistCovers_20 = keys_20.map(keys_20 => {
      const playlist_image = data_20.items[keys_20].images[0].url;
      return (
        <img style={{width: "100%"}} src={playlist_image} key={keys_20} alt={keys_20}/>
      )
    });

    return (
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
        {allPlaylistCovers}
        {allPlaylistCovers_20}
      </div>
    )
  }


  render() {
    if (this.state.loading === true) {
      return <p>loading</p>
    }

    console.log("this.state.current => ", this.state.current)
    console.log("AUTH_TOKEN => ", AUTH_TOKEN)
    console.log("REFRESH_TOKEN => ", REFRESH_TOKEN)
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
