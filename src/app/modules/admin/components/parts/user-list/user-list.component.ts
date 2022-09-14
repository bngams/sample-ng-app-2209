import { Component, OnInit } from '@angular/core';
import { USERS } from '../../../mocks/users.mock';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
