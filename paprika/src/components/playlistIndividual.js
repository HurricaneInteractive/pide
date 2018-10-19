import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import axios from 'axios'
import paprikaImg from '../content/paprika.jpg'

const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

const AUTH_TOKEN = window.sessionStorage.access_token
const REFRESH_TOKEN = window.sessionStorage.refresh_token


class PlaylistInvididual extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = {
      playlist_data: null,
      all_tracks_data: [],
      tracks_data: null,
      tracks_ids: [],
      danceability: 0,
      energy: 0,
      liveness: 0,
      data_loading: true,

      rows: null,
      filters: {},
      sortColumn: null,
      sortDirection: null
    }

    this._columns = [
      {
        key: 'id',
        name: 'ID',
        width: 80
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
        filterable: true,
        sortable: true
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
      let seconds = (this.state.all_tracks_data[i].duration_ms) / 1000;
      let minutes = seconds/60;

      let timeString = Math.floor(minutes);
      console.log('this.state.all_tracks_data[i] => ', this.state.all_tracks_data[i])
      console.log('this.state.all_tracks_data[i].track => ', this.state.all_tracks_data[i].track)
      rows.push({
        id: i + 1,
        title: this.state.all_tracks_data[i].track.name,
        artist: this.state.all_tracks_data[i].track.artists[0].name,
        length: timeString + ':' + seconds,
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
      for (let i = 0, len = res.data.items.length; i < len; i++) {
        const addId = res.data.items[i].track.id;
        tracks_ids.push(addId);
      }

      this.setState({
        tracks_ids: tracks_ids,
        all_tracks_data: res.data.items,
        playlists_total: res.data.total
      });

      console.log('this.state.tracks_ids => ', this.state.tracks_ids)
      
      
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

      console.log('TCL: PlaylistInvididual -> getExtensiveTracksData -> danceability', danceability);
      console.log('TCL: PlaylistInvididual -> getExtensiveTracksData -> energy', energy);
      console.log('TCL: PlaylistInvididual -> getExtensiveTracksData -> liveness', liveness);


      danceability = Math.round((danceability / trackData.length) * 100);
      energy = Math.round((energy / trackData.length) * 100);
      liveness = Math.round((liveness / trackData.length) * 100);
      
      console.log('danceability => ', danceability)
      console.log('energy => ', energy)
      console.log('liveness => ', liveness)

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
                <h3>Created by <span>{this.props.data.owner.display_name}</span></h3>
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
              <h1>PLAYLIST VIEW</h1>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                <br></br>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
                <br></br>
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
              </p>
              <div className="all_tracks">
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
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default PlaylistInvididual;