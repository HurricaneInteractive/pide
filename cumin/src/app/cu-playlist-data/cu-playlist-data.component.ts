import { Component, Input } from '@angular/core';

interface PlaylistStatistics {
  title: string,
  artists: Array<{
    name: string,
    appears: number
  }>,
  total_tracks: number,
  popularity: number,
  total_ms: number,
  explicit: {
    true_count: number,
    false_count: number
  },
  albums: Array<{
    name: string,
    appears: number
  }>
}

@Component({
  selector: 'app-cu-playlist-data',
  templateUrl: './cu-playlist-data.component.html',
  styleUrls: ['./cu-playlist-data.component.scss']
})

export class CuPlaylistDataComponent {
  private _data: Array<any>
  private _playlist_tracks: Array<any>
  
  playlist_tracks_data: Array<PlaylistStatistics>
  total_tracks: number = 0
  average_tracks: number = 0

  @Input() set data(data: any) {
    this._data = data
  }

  get data() {
    return this._data
  }

  @Input() set playlist_tracks(playlist_tracks: any) {
    this._playlist_tracks = playlist_tracks
  }

  get playlist_tracks() {
    return this._playlist_tracks
  }

  ngOnChanges() {
    if (this._playlist_tracks) {
      this.calculateTrackRelatedData();
    }
  }

  ngOnInit() {
    this.total_tracks = this._data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.tracks.total;
    }, 0);

    this.average_tracks = Math.floor(this.total_tracks / this._data.length);
  }

  private findArtist(item: any, find: string) {
    return item.name === find
  }

  private findAlbum(item: any, find: string) {
    return item.name === find
  }

  private incrementAppearInValue(target: Array<any>, find: string) {
    let index = target.findIndex(item => item.name === find)
    if (index !== -1) {
      target[index].appears++
    }
    else {
      target.push({
        name: find,
        appears: 1
      })
    }
  }

  calculateTrackRelatedData() {
    this.playlist_tracks_data = this._data.map((playlist, i) => {
      let object: PlaylistStatistics = {
        title: playlist.name,
        artists: [],
        total_tracks: playlist.tracks.total,
        popularity: 0,
        total_ms: 0,
        explicit: {
          true_count: 0,
          false_count: 0
        },
        albums: []
      }

      this._playlist_tracks[i].forEach((track, x) => {
        object.popularity += track.track.popularity
        object.total_ms += track.track.duration_ms
        track.track.explicit ? object.explicit.true_count++ : object.explicit.false_count++

        track.track.album.artists.forEach(artist => {
          this.incrementAppearInValue(object.artists, artist.name)
        });

        this.incrementAppearInValue(object.albums, track.track.album.name)
      });

      object.popularity = Math.floor(object.popularity / this._playlist_tracks[i].length)

      return object
    })
  }
}
