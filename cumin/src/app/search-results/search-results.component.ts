import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent implements OnInit {
  @Output() selectedArtist = new EventEmitter<object>()
  private _searchResults: Array<object>|null

  @Input() set results(results: Array<object>) {
    this._searchResults = results || null;
  }

  get results() {
    return this._searchResults;
  }

  selectArtist(artist: object) {
    this.selectedArtist.emit(artist)
  }

  constructor() { }

  ngOnInit() {
  }

}
