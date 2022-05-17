import { Component, OnInit } from '@angular/core';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  filter
} from 'rxjs';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FormControl } from '@angular/forms';
import { ApiResponse } from '../api-response';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult?: Observable<ApiResponse>;
  movies?: Movie[];
  message?: string;
  public userInput = new FormControl();
  isLoading=false;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.searchResult = this.userInput.valueChanges.pipe(
      debounceTime(300),
      tap((x)=>{
        if (x==="") this.message=undefined
      }),
      filter((x)=> x!==""),
      distinctUntilChanged(),
      tap(() => {
        this.movies=[]
        this.isLoading = true;
      }),
      switchMap((query) => this.movieService.searchMovies(query))
    );

    this.searchResult.subscribe((res) => {
      this.isLoading = false;
      if (res.Search) {
        this.message = undefined;
        this.movies = res.Search;
      } else {
          this.message = res.Error;
      }
    });
  }
}
