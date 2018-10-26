import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { ChartsModule } from 'ng2-charts';

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
import { PopularGenresComponent } from './popular-genres/popular-genres.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';

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
    PopularGenresComponent,
    LineChartComponent,
    ArtistInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IconsModule,
    NgsRevealModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
