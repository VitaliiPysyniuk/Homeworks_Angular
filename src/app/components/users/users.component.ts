import {Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {IUser} from '../../models';
import {UsersService} from '../../services/Users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnChanges {
  user: IUser;
  @Input()
  selectedUserId: number;

  constructor(private service: UsersService) {
    console.log('Users', this.selectedUserId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Users', this.selectedUserId);
    this.selectedUserId = changes.selectedUserId.currentValue;
    this.service.getUserById(this.selectedUserId).subscribe(value => this.user = value);
  }

  deleteUser(): void {
    this.user = null;
  }


}
