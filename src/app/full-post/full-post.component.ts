import { Component, OnInit } from '@angular/core';
import {IPost} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      this.post = this.router.getCurrentNavigation().extras.state as IPost;
    });
  }

  ngOnInit(): void {
  }

}
