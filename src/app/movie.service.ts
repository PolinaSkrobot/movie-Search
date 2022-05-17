import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url = `https://www.omdbapi.com/?apikey=1ce9470d&s=`;

  constructor(public http: HttpClient) {}
  searchMovies(input: string): Observable<ApiResponse> {
    return this.http
      .get<ApiResponse>(`${this.url}${input}`)
  }
}
