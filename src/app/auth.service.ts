import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[]=[]
  constructor(private router: Router) { }

  registerUser(form: FormGroup): void {
    if (this.unique(form.value.email)) {
      this.users.push(form.value);
      localStorage.setItem("form-data", JSON.stringify(this.users));
      this.router.navigate(["/main"]);
    }
  }
  unique(email: string): boolean {
    this.users = JSON.parse(localStorage.getItem("form-data") || "");
    const exist = this.users.filter((x) => x.email === email);
    return exist.length ? false : true;
  }
}
