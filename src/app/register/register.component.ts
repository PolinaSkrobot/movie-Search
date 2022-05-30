import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder
} from "@angular/forms";
import { Validators } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  message?: string;
  registrationForm = this.fb.group({
    firstName: [
      "",
      Validators.compose([Validators.minLength(3), Validators.required]),
    ],
    lastName: [
      "",
      Validators.compose([Validators.minLength(3), Validators.required]),
    ],
    email: [
      "",
      Validators.compose([
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        Validators.required,
      ]),
    ],
    password: [""],
  });

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  get firstName(): AbstractControl|null {
    return this.registrationForm.get("firstName");
  }
  get lastName(): AbstractControl|null {
    return this.registrationForm.get("lastName");
  }
  get email(): AbstractControl|null {
    return this.registrationForm.get("email");
  }

  register(): void {
    if (this.auth.unique(this.registrationForm.value.email)) {
      this.auth.registerUser(this.registrationForm);
    } else {
      this.message = "Sorry... The user with such email already exists";
    }
  }
}
