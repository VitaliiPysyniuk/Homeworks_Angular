import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  getAllComment(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getAllUserComForPost(userId: number, postId: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
