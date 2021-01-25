import {Component, Input, OnInit, Output} from '@angular/core';
import {IPost, IUser} from '../../models';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  @Output()
  selectUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  upSelectedUser(id: number): void {
    console.log('Post', id);
    this.selectUser.emit(id);
  }



}
