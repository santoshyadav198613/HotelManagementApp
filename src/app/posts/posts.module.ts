import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
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
