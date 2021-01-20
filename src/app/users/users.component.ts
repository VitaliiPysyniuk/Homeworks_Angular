import {Component} from '@angular/core';
import {cars} from '../../database/carDatabase';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  cars = cars;
}

