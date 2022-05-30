import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[]=[]
  logged=false
  constructor(private router: Router) { }

  registerUser(form: FormGroup): void {
      this.users.push(form.value);
      localStorage.setItem("form-data", JSON.stringify(this.users));
      this.router.navigate(["/main"]);
 
  }
  unique(email: string): boolean {
    this.users = JSON.parse(localStorage.getItem("form-data") || "");
    const exist = this.users.filter((x) => x.email === email);
    return exist.length ? false : true;
  }

  login(form: FormGroup): void {
    if (this.exist(form.value.email, form.value.password)) {
      this.router.navigate(["/main"]);
      this.logged=true
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
}
