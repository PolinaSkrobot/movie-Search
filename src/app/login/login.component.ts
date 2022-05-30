import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  login(): void {
       this.auth.login(this.loginForm)
  }
  constructor(private auth: AuthService) {}
}
