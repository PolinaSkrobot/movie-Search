import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
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

  constructor(private auth: AuthService) {}

  get firstName(): AbstractControl {
    return this.registrationForm.get("firstName")!;
  }
  get lastName(): AbstractControl {
    return this.registrationForm.get("lastName")!;
  }
  get email(): AbstractControl {
    return this.registrationForm.get("email")!;
  }

  register(): void {
    if (this.auth.unique(this.registrationForm.value.email)) {
      this.auth.registerUser(this.registrationForm);
    } else {
      this.message = "Sorry... The user with such email already exists"
    }
  }
}
