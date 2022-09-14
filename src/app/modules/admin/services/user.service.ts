import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  observableDemo(): void {
    // Observer(s) => subscribe => Observable (subscriber)
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      // simulate async treatment
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 3000);
    });

    // observer
    const observer = {
      next: (result: number) => console.log('next', result),
      error: (err: any) => console.log('error', err),
      complete: () => console.log('complete'),
    };
  }
}
