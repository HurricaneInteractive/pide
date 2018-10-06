import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cu-playlist-data',
  templateUrl: './cu-playlist-data.component.html',
  styleUrls: ['./cu-playlist-data.component.scss']
})

export class CuPlaylistDataComponent {
  private _data: Array<object>;
  total_tracks: number = 0;
  average_tracks: number = 0;

  @Input() set data(data: any) {
    this._data = data
    
    this.total_tracks = data.reduce((accumulator, currentValue, currentIndex) => {
      return accumulator + currentValue.tracks.total;
    }, 0);

    this.average_tracks = Math.floor(this.total_tracks / data.length);
  }

  get data() {
    return this._data
  }
}
