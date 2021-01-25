import { Component } from '@angular/core';
import {IUser} from './models';
import {UsersService} from './services/Users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  user: IUser;
  selectedUserId: number;

  constructor(private service: UsersService) {
  }

  getSelectedUser(id): void {
    console.log('App', id);
    this.selectedUserId = id;
    // this.service.getUserById(id).subscribe(value => this.user = value);
  }
}
