import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  users: User[] = [];
  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  login(): void {
    if (this.exist(this.loginForm.value.email, this.loginForm.value.password)) {
      this.router.navigate(["/main"]);
    } else {
      this.router.navigate(["/register"]);
    }
  }
  exist(email: string, password: string): boolean {
    this.users = JSON.parse(localStorage.getItem("form-data") || "");
    const exist = this.users.filter(
      (x) => x.email === email && x.password === password
    );
    return exist.length ? true : false;
  }

  constructor(private router: Router) {}
}
