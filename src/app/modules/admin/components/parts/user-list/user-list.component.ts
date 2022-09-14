import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { USERS } from '../../../mocks/users.mock';
import { User } from '../../../models/user';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = USERS;

  @ViewChildren(UserCardComponent)
  private userCardsComponent!: QueryList<UserCardComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(user: User): void {
    this.users.push(user);
  }

}
