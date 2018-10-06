import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSearch } from 'angular-feather';

const icons = [
  IconSearch
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: icons
})
export class IconsModule { }
