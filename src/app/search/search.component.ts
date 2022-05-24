import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  Observable,
  debounceTime,
  distinctUntilChanged
} from "rxjs";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  @Output() inputValue = new EventEmitter();
  userQuery$?: Observable<string>;
  public userInput = new FormControl();

  ngOnInit(): void {
    // this.searchResult$ = this.userInput.valueChanges.pipe(
    //   debounceTime(300),
    //   tap((x)=>{
    //     if (x==="") this.message=undefined
    //   }),
    //   filter((x)=> x!==""),
    //   distinctUntilChanged(),
    //   tap(() => {
    //     this.movies=[]
    //     this.isLoading = true;
    //     this.message=undefined
    //   }),
    //   switchMap((query) => this.movieService.searchMovies(query))
    // );
    this.userQuery$ = this.userInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );
    this.userQuery$.subscribe((res) => {
      this.inputValue.emit(res);
    });
  }
}
