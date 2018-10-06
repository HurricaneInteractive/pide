import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSearch, IconX } from 'angular-feather';

const icons = [
  IconSearch,
  IconX
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: icons
})
export class IconsModule { }
