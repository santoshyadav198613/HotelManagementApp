import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [
        { path: 'posts', component: PostsComponent },
        { path: 'posts/:postid', component: PostDetailsComponent }
      ]
    )
  ],
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostDetailsComponent
  ]
})
export class PostsModule { }
