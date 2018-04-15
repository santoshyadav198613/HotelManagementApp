import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostResolveGuard } from './service/post-resolve.guard';
import { PostsService } from './service/posts.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostInterceptorService } from './service/post-interceptor.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        {
          path: '', component: PostsComponent, canActivate: [AuthGuard],
          canActivateChild: [AuthGuard], resolve: {
            postList: PostResolveGuard
          },
          children: [
            { path: ':postid', component: PostDetailsComponent },
            { path: ':postid/edit', component: PostEditComponent }
          ]
        }
      ]
    )
  ],
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostDetailsComponent,
    PostEditComponent
  ],
  providers: [PostsService, PostResolveGuard,
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true }]
})
export class PostsModule { }
