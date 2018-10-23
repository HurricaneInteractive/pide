import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-genres',
  templateUrl: './popular-genres.component.html',
  styleUrls: ['./popular-genres.component.scss']
})

export class PopularGenresComponent implements OnInit {

  private _genres;
  private _top_ten: Array<{
    genre: string,
    count: number,
    percentage: number
  }>

  @Input() set genres(genres: Array<any>) {
    this._genres = genres
  }

  get top_ten() {
    return this._top_ten
  }

  get genres() {
    return this._genres
  }

  ngOnInit() {
    let top_ten = [...this.genres]
    top_ten = top_ten.splice(0, 10);

    this._top_ten = top_ten.map((genre) => {
      let percen = (genre.count / this.genres.length) * 100
      return {
        ...genre,
        percentage: percen
      }
    })
  }
}
