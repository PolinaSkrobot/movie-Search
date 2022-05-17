import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() public movieP: Movie;
  constructor() {
   this.movieP= {
     Year: 1,
      Title: "",
      imdbID: "",
      Type: "",
      Poster: ""
   }
  }

  ngOnInit(): void {
  }

}
