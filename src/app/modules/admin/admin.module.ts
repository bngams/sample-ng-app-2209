import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './components/pages/users/users.component';
import { PostsComponent } from './components/pages/posts/posts.component';
import { UserListComponent } from './components/parts/user-list/user-list.component';
import { UserCardComponent } from './components/parts/user-card/user-card.component';
import { UserFormComponent } from './components/parts/user-form/user-form.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    UserListComponent,
    UserCardComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
})
export class AdminModule { }
