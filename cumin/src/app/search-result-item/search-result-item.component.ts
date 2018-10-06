import { Component, OnInit, Input } from '@angular/core';

interface SearchResultItem {
  name: string,
  image?: string,
  followers: number,
  popularity: number
}

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss']
})

export class SearchResultItemComponent {
  private _resultItem: SearchResultItem;

  @Input() set item(item: any) {
    this._resultItem = {
      name: item.name,
      followers: item.followers.total,
      popularity: item.popularity
    }

    if (item.images.length > 0) {
      this._resultItem.image = item.images[2].url || item.images[1].url || item.images[0].url
    }
    else {
      this._resultItem.image = 'http://www.gravatar.com/avatar/?d=identicon'
    }
  }

  get item() {
    return this._resultItem
  }
}
