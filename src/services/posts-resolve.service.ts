import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../models';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPost[]>{

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
