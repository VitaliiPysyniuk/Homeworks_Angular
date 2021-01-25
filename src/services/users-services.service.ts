import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id): Observable<any> {
    return this.httpClient.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
