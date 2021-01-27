import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  posts: IPost[];

  constructor(private activatedRouter: ActivatedRoute) {
    activatedRouter.data.subscribe(value => {
      this.posts = value.postsData;
    });
  }
}
