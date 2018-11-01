import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import axios from 'axios'
import musicKey from '../content/musicKey'
import gradient from 'gradient-color'
import paprikaImg from '../content/paprika.jpg'
import { ResponsiveWaffle } from '@nivo/waffle'
import { unique_shuffled_colors } from 'unique-colors'

import { animateScroll as scroll } from 'react-scroll'

import { convertDurationToString } from '../globalFunctions'
import { getArtistsById } from '../getSpotifyData';

const AUTH_TOKEN = window.sessionStorage.access_token

const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

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
      waffle_loading: true,

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
        title: <a href={externalSpotifyURL} target="_blank" rel="noreferrer noopener">{this.state.all_tracks_data[i].track.name}</a>,
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
    // console.log('this.props.data (componentDidMount) => ', this.props.data)
    scroll.scrollToTop({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
    })
    
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
      let waffleArray = [];
      let artistArray = [];

      for (let i = 0, len = res.data.items.length; i < len; i++) {
        let addId = res.data.items[i].track.id || 'no_ID';
        let addDuration = res.data.items[i].track.duration_ms || 0;
        tracks_ids.push(addId);
        total_time += addDuration;
        let artistsLength = res.data.items[i].track.artists.length;

        for (let ye = 0; ye < artistsLength; ye++ ) {
          let current_artist = res.data.items[i].track.artists[ye].id;
          artistArray.push(current_artist)
        }
      }


      function compressArray(original) {
 
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
              compressed.push(original[i]);
              const pushToObj = {
                [original[i]]: {
                  'value': original[i],
                  'count': myCount,
                  'çolor': getColour                }
              }
              const oldObj = compressedObjectGlobal;
              const compressedObject = Object.assign(oldObj, pushToObj);
              compressedObjectGlobal = compressedObject;
            }
          }
        }
        return {'array': compressed, 'obj': compressedObjectGlobal};
      };
      
      // It should go something like this:
      
      let filteredArtists = compressArray(artistArray);
      // console.log('compressed', filteredArtists.array);
      // console.warn('compressedObject', filteredArtists.obj);
      let toGetArtists = filteredArtists.array.slice(0, 49);
      console.log('TCL: PlaylistInvididual -> getTracksData -> toGetArtists', toGetArtists);

      getArtistsById(toGetArtists).then(res => {
        let getColour = unique_shuffled_colors(res.data.artists.length);
        for (let i = 0; i < res.data.artists.length; i++) {

          let getColourToUse = getColour[i];
          // console.log('getColour => ', getColour)
          let pushMe = {
            "id": res.data.artists[i].name,
            "label": res.data.artists[i].name,
            "value": filteredArtists.obj[res.data.artists[i].id].count,
            "color": getColourToUse
          }
          waffleArray.push(pushMe)
        }
        console.warn('waffleArray => ', waffleArray)
        this.setState({
          waffle_loading: false
        })
      })

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
                <h2>{this.props.data.name}</h2>
                <h3>Created by <span>{this.props.data.owner.display_name}</span> - {this.state.data_loading ? null : convertDurationToString(this.state.playlist_duration).timeString}
                </h3>
                <div className="playlist_stats">

                  <div>
                    <h3>{this.state.danceability}%</h3>
                    <p>danceability</p>
                  </div>
                  <div>
                    <h3>{this.state.energy}%</h3>
                    <p>energy</p>
                  </div>
                  <div>
                  <h3>{this.state.liveness}%</h3>
                    <p>liveness</p>
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
                {this.state.waffle_loading ?
                  'loading'
                    :
                  <ResponsiveWaffle
                    // set legend to be at the bottom of the graph
                    data={this.state.data_for_waffle}
                    total={this.state.data_for_waffle.length}
                    rows={24}
                    columns={24}
                    margin={{
                      "top": 10,
                      "right": 10,
                      "bottom": 10,
                      "left": 100
                    }}
                    fillDirection="top"
                    padding={0}
                    colorBy={d => d.color}
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