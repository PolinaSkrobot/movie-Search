import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-movie-search";
  searchValue = "";

  searchChanged(input: string): void {
    this.searchValue = input;
  }


}
