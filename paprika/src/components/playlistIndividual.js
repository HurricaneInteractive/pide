import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import axios from 'axios'
import musicKey from '../content/musicKey'
import paprikaImg from '../content/paprika.jpg'
import { ResponsiveWaffle } from '@nivo/waffle'

import { convertDurationToString } from '../globalFunctions'

const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

const AUTH_TOKEN = window.sessionStorage.access_token

const p = ["background: rgb(11, 11, 13)", "color: rgb(217, 178, 98)", "border: 1px solid rgb(217, 178, 98)", "margin: 8px 0", "padding: 8px 32px 8px 24px", "line-height: 32px"].join(";");

class PlaylistInvididual extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      playlist_data: null,
      all_tracks_data: [],
      allExtraTrackData: null,
      tracks_data: null,
      tracks_ids: [],
      danceability: 0,
      energy: 0,
      liveness: 0,
      data_loading: true,

      data_for_waffle: {},

      rows: null,
      filters: {},
      sortColumn: null,
      sortDirection: null
    }

    this._columns = [
      {
        key: 'id',
        name: 'ID',
        sortable: true,
        width: 40
      },
      {
        key: 'title',
        name: 'Title',
        filterable: true,
        sortable: true
      },
      {
        key: 'artist',
        name: 'Artist',
        filterable: true,
        sortable: true
      },
      {
        key: 'album',
        name: 'Album',
        filterable: true,
        sortable: true
      },
      {
        key: 'length',
        name: 'Length',
        filterable: false,
        sortable: false,
        width: 120
      },
      {
        key: 'bpm',
        name: 'BPM',
        filterable: false,
        sortable: true,
        width: 80
      },
      {
        key: 'key',
        name: 'Key',
        filterable: true,
        sortable: true,
        width: 80
      }
    ];
  }

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  };

  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  createRows = () => {
    let rows = [];
    let numberOfRows = this.state.all_tracks_data.length;
    for (let i = 0; i < numberOfRows; i++) {

      let durationObj = convertDurationToString(this.state.all_tracks_data[i].track.duration_ms, 'track').timeString;
      let keyNumber = 'null';
      let bpmNumber = 'null';
      let externalSpotifyURL = 'https://lukesecomb.digital'
      if (this.state.allExtraTrackData[i] !== null) {
        keyNumber = musicKey[this.state.allExtraTrackData[i].key];
        bpmNumber = Math.round(this.state.allExtraTrackData[i].tempo)
        externalSpotifyURL = this.state.all_tracks_data[i].track.external_urls.spotify
      }
      rows.push({
        id: i + 1,
        title: <a href={externalSpotifyURL}>{this.state.all_tracks_data[i].track.name}</a>,
        artist: this.state.all_tracks_data[i].track.artists[0].name,
        album: this.state.all_tracks_data[i].track.album.name,
        length: durationObj,
        bpm: bpmNumber,
        key: keyNumber,
      });
    }
    return rows;
  };

  componentDidMount() {
    console.log('this.props.data (componentDidMount) => ', this.props.data)
    this.getTracksData(this.props.data.tracks.href);
  }

  getTracksData(url) {
    axios({
      method: 'get',
      url: url,
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {
      console.warn("res.data => ", res.data)
      let tracks_ids = [];
      let total_time = 0;
      let data_for_waffle = {};
      let waffleArray = [];
      let artistValues = {};
      for (let i = 0, len = res.data.items.length; i < len; i++) {
        let addId = res.data.items[i].track.id || 'no_ID';
        let addDuration = res.data.items[i].track.duration_ms || 0;
        tracks_ids.push(addId);
        total_time += addDuration;
        let artistsLength = res.data.items[i].track.artists.length;
        console.log('TCL: PlaylistInvididual -> getTracksData -> artistsLength', artistsLength);
        for (let ye = 0; ye < artistsLength; ye++ ) {
          // console.log('res.data.items[i].track.artists[a] => ', res.data.items[i].track.artists[ye])
          // console.log('res.data.items[i].track.artists[a] => ', res.data.items[i].track.artists[ye].name)
          let current_artist = res.data.items[i].track.artists[ye].id;
          console.log(res.data.items[i])
          console.log(res.data.items[i].track.artists)
          // console.log('TCL: current_artist', current_artist);
          // console.log('TCL: artistValues[current_artist]', artistValues[current_artist]);
          // console.log('TCL: artistValues[current_artist]', artistValues);

          let waffle_artist_ref = artistValues['current_artist'];
          // console.log('TCL: PlaylistInvididual -> getTracksData -> waffle_artist_ref', waffle_artist_ref);

          let dataForWaffle = data_for_waffle;
          const dataForWaffleConst = data_for_waffle;
          // console.log('TCL: PlaylistInvididual -> getTracksData -> dataForWaffle', dataForWaffle);
          // console.log('TCL: PlaylistInvididual -> getTracksData -> dataForWaffleConst', dataForWaffleConst);
          // if (waffle_artist_ref === undefined) {
          //   console.warn('%c waffle_artist_ref === undefined', p)
          // }
          if (typeof waffle_artist_ref === undefined) {
            console.warn('%c typeof waffle_artist_ref === undefined', p)
          }
          if (waffle_artist_ref === 'undefined') {
            console.warn('%c typeof waffle_artist_ref === "undefined"', p)
          }
          
          if (waffle_artist_ref === undefined) {
            console.error('value === undefined', waffle_artist_ref)
            let pushArtistValue = {
              [current_artist]: {
                value: 1
              }
            }
            data_for_waffle = Object.assign({}, dataForWaffle, pushArtistValue)
          } else {
            console.warn('value already exists', waffle_artist_ref)
            let prevVal = waffle_artist_ref;
            // console.log('TCL: PlaylistInvididual -> getTracksData -> prevVal', prevVal);
            let pushArtistValue = {
              [current_artist]: {
                value: 111111
              }
            }
            data_for_waffle = Object.assign({}, dataForWaffle, pushArtistValue)
          }

          // let pushArtistValue = {
          //   [current_artist]: newVal
          // }
          // Object.assign(data_for_waffle, pushArtistValue)
          console.log('data_for_waffle object{} => ', data_for_waffle)

          let artist_volume = data_for_waffle
          let track_artist_string = res.data.items[i].track.artists[0].name;
          console.log('TCL: PlaylistInvididual -> getTracksData -> track_artist_string', track_artist_string);
          let pushMe = {
            "id": addId,
            "label": 'value',
            "value": data_for_waffle[current_artist],
            "color": "#468df3"
          }
          waffleArray.push(pushMe)
        }
        
        
        // Object.assign(data_for_waffle, pushMe)
      }
      

      this.setState({
        playlist_duration: total_time,
        tracks_ids: tracks_ids,
        all_tracks_data: res.data.items,
        data_for_waffle: waffleArray,
        playlists_total: res.data.total
      });
      
      this.getExtensiveTracksData();
    })
  }

  getExtensiveTracksData() {
    let stringOfIds = this.state.tracks_ids.toString();
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/audio-features/',
      params: {
        ids: stringOfIds
      },
      headers: {
        Authorization: "Bearer " + AUTH_TOKEN
      }
    }).then(res => {
      console.warn("res.data => ", res.data)
      let trackData = res.data.audio_features;
      this.setState({
        allExtraTrackData: trackData
      });
      let danceability = 0;
      let energy = 0;
      let liveness = 0;
      // let tracks_ids = [];
      console.log('trackData => ', trackData);
      let trackLength = trackData.length;
      for (let i = 0, len = trackData.length; i < len; i++) {
        if (trackData[i] !== null) {
          danceability += trackData[i].danceability;
          energy += trackData[i].energy;
          liveness += trackData[i].liveness;
        } else {
          trackLength = trackLength - 1;
        }
        console.log('trackLength => ', trackLength)
      }

      danceability = Math.round((danceability / trackData.length) * 100);
      energy = Math.round((energy / trackData.length) * 100);
      liveness = Math.round((liveness / trackData.length) * 100);

      this.setState({
        danceability: danceability,
        energy: energy,
        liveness: liveness,
        data_loading: false,
        rows: this.createRows(1000)
      });
    })
  }

  render() {

    const playlist_image = this.props.data.images[0] || null;
    let imageURL = paprikaImg;

    if (playlist_image !== null) {
      imageURL = playlist_image.url;
    }

    // console.log('data_for_waffle => ', this.state.data_for_waffle);

    return (
      <>
        <div className="playlist_overlay_background"></div>
        <section className="playlist_overlay">
          <div className="playlist_overlay_wrapper">
            <div className="close" onClick={this.props.hidePlaylistView}>X</div>
            <header>
              <img src={imageURL} alt="playlist artwork"/>
              <div className="meta_box">
                <h1>{this.props.data.name}</h1>
                <h3>Created by <span>{this.props.data.owner.display_name}</span> - 
                  {this.state.data_loading ? null : convertDurationToString(this.state.playlist_duration).timeString}
                </h3>
                <div className="playlist_stats">

                  <div>
                    <div className="progression_circle" data-progress="50"></div>
                    <p>{this.state.danceability} danceability</p>
                  </div>
                  <div>
                    <div className="progression_circle" data-progress="50"></div>
                    <p>{this.state.energy} energy</p>
                  </div>
                  <div>
                    <div className="progression_circle" data-progress="50"></div>
                    <p>{this.state.liveness} liveness</p>
                  </div>
                </div>

              </div>
            </header>
            <div className="playlist_content">
              <h3>Tracklist</h3>
              <p>sortable and filterable tracklist</p>
              <div className="container all_tracks">
                {this.state.data_loading ?
                  'loading'
                  :
                  <ReactDataGrid
                    onGridSort={this.handleGridSort}
                    enableCellSelect={true}
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.getSize()}
                    minHeight={500}
                    toolbar={<Toolbar enableFilter={true}/>}
                    onAddFilter={this.handleFilterChange}
                    onClearFilters={this.onClearFilters}
                  />
                }
              </div>
              <h3>Artists</h3>
              <p>visualisation of artist volume within this playlist</p>
              <div className="container waffle_graph">
                {this.state.data_loading ?
                  'loading'
                    :
                  <ResponsiveWaffle
                    data={[
                      {
                        "id": "men",
                        "label": "men",
                        "value": 29.95557264355736,
                        "color": "#468df3"
                      },
                      {
                        "id": "women",
                        "label": "women",
                        "value": 8.376879990309883,
                        "color": "#ba72ff"
                      },
                      {
                        "id": "children",
                        "label": "children",
                        "value": 23.846083196498633,
                        "color": "#a1cfff"
                      }
                    ]}
                    total={this.state.all_tracks_data.length}
                    rows={12}
                    columns={36}
                    margin={{
                      "top": 10,
                      "right": 10,
                      "bottom": 10,
                      "left": 120
                    }}
                    colorBy="id"
                    borderColor="inherit:darker(0.3)"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={11}
                    legends={[
                      {
                        "anchor": "top-left",
                        "direction": "column",
                        "justify": false,
                        "translateX": -100,
                        "translateY": 0,
                        "itemsSpacing": 4,
                        "itemWidth": 100,
                        "itemHeight": 20,
                        "itemDirection": "left-to-right",
                        "itemOpacity": 1,
                        "itemTextColor": "#777",
                        "symbolSize": 20,
                        "effects": [
                          {
                            "on": "hover",
                            "style": {
                              "itemTextColor": "#000",
                              "itemBackground": "#f7fafb"
                            }
                          }
                        ]
                      }
                    ]}
                  />
                }
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default PlaylistInvididual;