import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSearchComponent } from './user-search/user-search.component';

import { IconsModule } from './icons/icons.module';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { CuPlaylistDataComponent } from './cu-playlist-data/cu-playlist-data.component';
import { TabsComponent } from './tabs/tabs.component';
import { CuAlbumsDataComponent } from './cu-albums-data/cu-albums-data.component';
import { CuTracksDataComponent } from './cu-tracks-data/cu-tracks-data.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserProfileComponent,
    UserSearchComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    CuPlaylistDataComponent,
    TabsComponent,
    CuAlbumsDataComponent,
    CuTracksDataComponent,
    BubbleChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
