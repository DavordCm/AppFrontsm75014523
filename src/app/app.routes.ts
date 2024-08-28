import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './home/posts/posts.component';
import { UsersComponent } from './home/users/users.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent }
    ]
  },
  { path: '**', redirectTo: '' } 
];
