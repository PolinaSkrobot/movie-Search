import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() public moviesP: Movie[]=[];
  constructor() { }

}
