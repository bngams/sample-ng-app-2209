import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../models/user';
import { UserListComponent } from '../../parts/user-list/user-list.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit  {
  @ViewChild('myList')
  private userListComponent!: UserListComponent;

  constructor() {
    console.log('ViewChild from constructor', this.userListComponent);
  }

  ngOnInit(): void {
    console.log('ViewChild from constructor', this.userListComponent);
  }

  ngAfterViewInit(): void {
    console.log('ViewChild from ngAfterViewInit', this.userListComponent);
  }

  addUser(user: User): void {
    console.log('user from form', user);
    this.userListComponent.addUser(user);
  }

}
