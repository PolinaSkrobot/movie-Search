import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  searchValue = "";

  searchChanged(input: string): void {
    this.searchValue = input;
  }

}
