import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() { }

  login(user: User) {
    if (user.userName === 'Admin' && user.password === 'Admin') {
      this.isLoggedIn = true;
      this.isAdmin = true;
      return true;
    }
    if (user.userName === 'Test' && user.password === 'Test') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }
}
