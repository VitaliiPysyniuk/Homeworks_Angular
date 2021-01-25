import {Component, OnInit, Output} from '@angular/core';
import {IPost, IUser} from '../../models';
import {PostsService} from '../../services/Posts.service';
import {UsersService} from '../../services/Users.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: IPost[];
  user: IUser;
  @Output()
  newSelectUser = new EventEmitter();

  constructor(private postsService: PostsService, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(values => {
      this.posts = values;
    });
  }

  upSelectedUser(id: number): void {
    console.log('Posts', id);
    this.newSelectUser.emit(id);
  }

}
