import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/pages/posts/posts.component';
import { UsersComponent } from './components/pages/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent }, // /admin/users
  { path: 'posts', component: PostsComponent }, // /admin/posts
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
