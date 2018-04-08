import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../service/posts.service';
import { Posts } from '../service/posts';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [PostsService]
})
export class PostDetailsComponent implements OnInit {
  postId: number;
  post: Posts;
  constructor(private route: ActivatedRoute,
    private postService: PostsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (res) => {
        this.postId = + res.get('postid');
        this.postService.getPostById(this.postId).subscribe(
          (data) => { this.post = data },
          (err) => console.log(err)
        )
      },
      (err) => console.log(err)
    )
  }

}
