import { BookmarkComponent } from './bookmark/bookmark.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';

// search - Route for searching movies
// bookmark - Route where bookmarks are stored
const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: MoviesComponent },
  { path: 'bookmark', component: BookmarkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
