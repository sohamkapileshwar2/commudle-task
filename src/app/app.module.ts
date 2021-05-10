import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSearchModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { RouterModule } from '@angular/router';
import { NbSidebarModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { MoviesComponent } from './movies/movies.component';
import { SearchEventComponent } from './search-event/search-event.component';
import { OmdbApi } from './search-event/search-event.service';

import { HttpClientModule } from '@angular/common/http';
import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchEventComponent,
    BookmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    RouterModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbSearchModule,
    HttpClientModule
  ],
  providers: [
    OmdbApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
