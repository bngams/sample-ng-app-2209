import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './components/pages/users/users.component';
import { PostsComponent } from './components/pages/posts/posts.component';


@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
