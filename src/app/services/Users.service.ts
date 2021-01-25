import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IPost, IUser} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUserById(id): Observable<IUser> {
    return this.httpClient.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
