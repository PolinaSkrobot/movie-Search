import {
  Component,
  Input,
} from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent {
  movies?: Movie[];
  message?: string;
  isLoading = false;
  apiCallResult$?: Subscription;

  @Input() set userInput(query: string) {
    if (this.apiCallResult$) {
      this.apiCallResult$.unsubscribe();
    }
    if (query) {      
      this.movies = [];
      this.isLoading = true;
      this.message = undefined;
      this.apiCallResult$ = this.movieService
        .searchMovies(query)
        .subscribe((res) => {
          this.isLoading = false;
          if (res.Search) {
            this.movies = res.Search;
          } else {
            this.message = res.Error;
          }
        });
    } else {
      this.movies = [];
      this.message = undefined;
    }
  }

  constructor(private movieService: MovieService) {}

}
