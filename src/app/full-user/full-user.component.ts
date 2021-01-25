import { Component, OnInit } from '@angular/core';
import {UsersServices} from '../../services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  userId: number;
  user: any;

  constructor(private usersServices: UsersServices, private activatedRouter: ActivatedRoute) {
    activatedRouter.params.subscribe( value => this.userId = value.id);
  }

  ngOnInit(): void {
    this.usersServices.getUserById(this.userId).subscribe(response => this.user = response);
  }

}
