import { OmdbApi } from './search-event.service';
import { Component } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

import { Movies } from '../movies/movies';

// Function in /bookmark/bookmark-movie.js to store movie in local storage
declare var bookmarkMovie: Function;

@Component({
  selector: 'nb-search-event',
  templateUrl: './search-event.component.html',
  styleUrls: ['./search-event.component.css']
})
export class SearchEventComponent {

  value = ''; // Value entered in search
  movieList: Movies[] = []; // List of movies received as API response
  error = ''; // Error if response is False

  bookmark_button(movie: Movies) {
    bookmarkMovie(movie);
  }

  constructor(private searchService: NbSearchService, api: OmdbApi) {

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;

        // API call to list of movies with given title
        api.getMovieList(this.value).subscribe((api_response) => {

          // Show error if response is False
          if (api_response['Response'] == "False") {
            this.movieList = [];
            this.error = this.error = 'Oops! ' + api_response['Error'];;
          }


          else {
            // List of movies
            let movieListApi = api_response['Search'];
            this.movieList = [];
            
            // Loop through list of movies
            for (var index in movieListApi) {
              // movie_details - API response for search through title
              // Extra API call to get rating
              api.getMovie(movieListApi[index]['Title']).subscribe((movie_details_res) => {

                if (movie_details_res['Response'] == "True") {
                  // movie_info - Final Movies object
                  let movie_info: Movies = {
                    Title: movie_details_res['Title'],
                    Year: movie_details_res['Year'],
                    Poster: movie_details_res['Poster'],
                    Type: movie_details_res['Type'],
                    Genre: movie_details_res['Genre'],
                    Ratings: movie_details_res['Ratings']
                  };
                  this.movieList.push(movie_info);

                }
              })
            }
            this.error = '';
          }
        });
      })

  }
}
