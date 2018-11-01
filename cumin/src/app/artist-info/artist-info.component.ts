import { Component, Input } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment'
import numeral from 'numeral'

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})

export class ArtistInfoComponent {
  private _artist: any
  private _artist_details: any;

  @Input() set artist(artist: any) {
    this._artist = artist
  }

  get artist() {
    return this._artist
  }

  get artist_details() {
    return this._artist_details
  }

  ngOnInit() {
    if (this._artist) {
      axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(this.artist.name)}&api_key=${environment.lastFM}&format=json`)
        .then((res) => {
            if (res.data.hasOwnProperty('artist')) {
              this._artist_details = res.data.artist
            }
        })
        .catch(e => console.error(e))
    }
  }

  getNumber(num) {
    return numeral(num).format('0,0');
  }
}
