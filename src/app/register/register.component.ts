import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  users: User[] = [];
  message?: string;
  registrationForm = new FormGroup({
    firstName: new FormControl(
      "",
      Validators.compose([Validators.minLength(3), Validators.required])
    ),
    lastName: new FormControl(
      "",
      Validators.compose([Validators.minLength(3), Validators.required])
    ),
    email: new FormControl(
      "",
      Validators.compose([
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        Validators.required,
      ])
    ),
    password: new FormControl(""),
  });

  constructor(private router: Router) {}

  get firstName() {
    return this.registrationForm.get("firstName");
  }
  get lastName() {
    return this.registrationForm.get("lastName");
  }
  get email() {
    return this.registrationForm.get("email");
  }
 
  registerUser(): void {
    if (this.unique(this.registrationForm.value.email)) {
      this.users.push(this.registrationForm.value);
      localStorage.setItem("form-data", JSON.stringify(this.users));
      this.router.navigate(["/main"]);
    }
     else this.message = "User with such email already exist";
  }
  unique(email: string): boolean {
    this.users = JSON.parse(localStorage.getItem("form-data") || "");
    const exist = this.users.filter((x) => x.email === email);
    return exist.length ? false : true;
  }
}
