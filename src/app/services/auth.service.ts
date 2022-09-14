import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  login(): void {
    console.log('login');
    this.loggedIn = true;
  }

  logout(): void {
    console.log('logout');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    // check local token
    return this.loggedIn;
  }

  hasPermission(perm: string): boolean {
    if(!this.isLoggedIn()) {
      console.log('hasPermission false');
      return false;
    }
    // appel http
    return true;
  }
}
