import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseMDB } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

const theMovieUrl = environment.theMovieUrl;
const theMovieApiKey = environment.theMovieApiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService   {

  http = inject(HttpClient);
 
  constructor() {}

  private ejecutarQuery(query: string): Observable<ResponseMDB> {
    query = theMovieUrl + query;
    query += `&api_key=${theMovieApiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35`;
    console.log(query)
    return this.http.get<ResponseMDB>(query);
  }

  getFeatures(): Observable<ResponseMDB> {
    return this.ejecutarQuery(`/discover/movie?primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-01-31`);
  }
}
