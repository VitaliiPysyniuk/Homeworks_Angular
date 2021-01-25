import { Component, OnInit } from '@angular/core';
import {UsersServices} from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private userServices: UsersServices) { }

  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(response => this.users = response);
  }

}
