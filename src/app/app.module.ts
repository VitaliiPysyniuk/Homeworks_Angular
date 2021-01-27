import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {PostsResolveService} from '../services/posts-resolve.service';
import { PostComponent } from './post/post.component';
import { FullPostComponent } from './full-post/full-post.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent, resolve: {postsData: PostsResolveService}, children: [
      {path: ':postId', component: FullPostComponent}
    ]},
  {path: 'comments', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
