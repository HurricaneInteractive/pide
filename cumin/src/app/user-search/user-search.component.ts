import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})

export class UserSearchComponent {
  @Output() searched = new EventEmitter<string>()
  searchTerm: string = ''

  search() {
    if (this.searchTerm.trim() !== '') {
      this.searched.emit(this.searchTerm)
    }
  }
}