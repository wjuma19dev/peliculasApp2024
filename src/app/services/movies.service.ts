import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseMDB } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService   {

  http = inject(HttpClient);

  constructor() {}

  getFeatures(): Observable<ResponseMDB> {
    return this.http.get<ResponseMDB>(`https://api.themoviedb.org/3/discover/movie?api_key=${environment.theMovieApiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35&primary_release_date.gte=2024-01-01&primary_release_date.lte=2024-01-31`);
  }
}
