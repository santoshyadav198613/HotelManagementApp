import { Component, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';

import { PostsService } from '../service/posts.service';
import { Posts } from '../service/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Posts[] = [];
  downloadedBytes: number = 0;
  constructor(private postService: PostsService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe(
      (res) => this.postsList = res['postList'],
      (err) => console.log(err)
    )
    // this.postService.getPosts().subscribe(
    //   (data) => this.postsList = data,
    //   (err) => console.log(err)
    // );
  }

  delete(id: number) {
    this.postService.deletePost(id).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

}
