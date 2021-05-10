import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class OmdbApi {
    private _baseUrl: string = 'http://www.omdbapi.com/?apikey=9d68afe3&';

    constructor(private http: HttpClient) { }

    getMovieList(title: String) {
        return this.http.get(this._baseUrl + `s=${title}`);
    }

    getMovie(title: String) {
        return this.http.get(this._baseUrl + `t=${title}`);
    }
}