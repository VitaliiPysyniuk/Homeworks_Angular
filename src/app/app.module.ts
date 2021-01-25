import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ShortUserComponent } from './short-user/short-user.component';
import { FullUserComponent } from './full-user/full-user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ShortUserComponent,
    FullUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: 'home/users', component: UsersComponent,
      children: [{
        path: ':id', component: FullUserComponent
      }]
    }, {
      path: 'home/posts', component: AppComponent
    }, {
      path: 'home/comments', component: AppComponent
    }, {
      path: 'home', component: AppComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
