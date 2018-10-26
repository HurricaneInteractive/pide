import { Component, OnInit, Input } from '@angular/core';

interface TrackStatistics {
  totalMs: number,
  explicit: {
    true_count: number,
    false_count: number,
    true_percentage: number,
    false_percentage: number
  },
  artists: Array<{
    appears: number,
    name: string,
		genres: Array<string>,
		bio?: string,
		similarArtists?: Array<any>,
		stats?: any,
		onTour?: number
  }>,
  popularity: number,
  mostPopularSong: any,
  leastPopularSong: any,
  timing: {
    seconds: number,
    minutes: number,
    hours: number,
    days: number
  }
}

@Component({
  selector: 'app-cu-tracks-data',
  templateUrl: './cu-tracks-data.component.html',
  styleUrls: ['./cu-tracks-data.component.scss']
})

export class CuTracksDataComponent {
  private _tracks: Array<any>
  private _genres: Array<any>
  private _genreComputed: Array<{
    genre: string,
    count: number
  }> = []
  private _trackStatistics: TrackStatistics

  @Input() set tracks(tracks: Array<any>) {
    this._tracks = tracks || null
  }

  @Input() set genres(genres: Array<any>) {
    this._genres = genres || null
  }

  get genreComputed() {
    return this._genreComputed
  }

  get trackStatistics() {
    return this._trackStatistics
  }

  get tracks() {
    return this._tracks
  }

  ngOnChanges() {
    if (this._genres) {
      let allGenres = this._genres.map((artist) => artist.genres).reduce((acc, val) => acc.concat(val), []);

      allGenres.forEach((genre: string) => {
        let index = this._genreComputed.findIndex(item => item.genre === genre)
        if (index !== -1) {
          this._genreComputed[index].count++
        }
        else {
          this._genreComputed.push({
            genre: genre,
            count: 1
          })
        }
      })

      this._genreComputed.sort((a, b) => b.count - a.count)

      if (this._tracks) {
        let object: TrackStatistics = {
          totalMs: 0,
          explicit: {
            true_count: 0,
            false_count: 0,
            true_percentage: 0,
            false_percentage: 0
          },
          artists: [],
          popularity: 0,
          mostPopularSong: {
            popularity: -1
          },
          leastPopularSong: {
            popularity: 200
          },
          timing: {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0
          }
        }
  
        this._tracks.forEach((track) => {
          track.explicit ? object.explicit.true_count++ : object.explicit.false_count++;
          object.totalMs += track.duration_ms
          object.popularity += track.popularity

          if (track.popularity > object.mostPopularSong.popularity) {
            object.mostPopularSong = track
          }

          if (track.popularity < object.leastPopularSong.popularity) {
            object.leastPopularSong = track
          }

          if (track.artists) {
            track.artists.forEach((artist) => {
              let index = object.artists.findIndex(item => item.name === artist.name)
              if (index !== -1) {
                object.artists[index].appears++
              }
              else {
                let x = this._genres.findIndex(item => item.name === artist.name)
                object.artists.push({
                  name: artist.name,
                  appears: 1,
                  genres: this._genres[x].genres
                })
              }
            })
          }
        })
  
        object.popularity = Math.floor((object.popularity / (this._tracks.length * 100)) * 100)
        object.explicit.true_percentage = Math.floor((object.explicit.true_count / this._tracks.length) * 100)
        object.explicit.false_percentage = Math.floor((object.explicit.false_count / this._tracks.length) * 100)

        object.timing.seconds = Math.round((object.totalMs / 1000) * 100) / 100
        object.timing.minutes = Math.round((object.totalMs / 60000) * 100) / 100
        object.timing.hours = Math.round((object.timing.minutes / 60) * 100) / 100
        object.timing.days = Math.round((object.timing.hours / 24) * 100) / 100
  
        this._trackStatistics = object
      }
    }
  }
}
