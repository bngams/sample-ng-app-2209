import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface Credentials {
  email: string;
  pwd: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  // duplicate attr to test subjects
  // like "new Observable()"
  loggedInObservable = new BehaviorSubject(false);

  constructor(private router: Router) { }

  login(crendentials: Credentials): void {
    console.log('login', crendentials);
    this.loggedIn = true;
    this.loggedInObservable.next(true);
    this.redirectToHome();
  }

  logout(): void {
    console.log('logout');
    this.loggedIn = false;
    this.loggedInObservable.next(false);
    this.redirectToHome();
  }

  redirectToHome(): void {
    this.router.navigateByUrl('/home');
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
