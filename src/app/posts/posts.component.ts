import { Component, OnInit } from '@angular/core';

import { PostsService } from './service/posts.service';
import { Posts } from './service/posts';
import { PostInterceptorService } from './service/post-interceptor.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  postData: Posts = new Posts();
  postResponse: Posts;
  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  savePost(postForm: any) {
    // this.postData = {
    //   userId: 4, title: 'This is test data',
    //   body: 'This is test body'
    // };
    console.log(this.postData);
    this.postService.savePost(this.postData).subscribe(
      (res) => {
        this.postResponse = res;
        postForm.reset();
      },
      (err) => console.log(err)
    );
  }

  updatePost() {
    this.postData = {
      id: 2, userId: 4, title: 'This is sample data to test put',
      body: 'This is sample body'
    };

    this.postService.updatePost(this.postData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

}
