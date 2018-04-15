import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Posts } from './posts';
import { PostsService } from './posts.service';

@Injectable()
export class PostResolveGuard implements Resolve<Posts[]> {
 
  constructor(private postService :PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Posts[]>  {
      return this.postService.getPosts();
  }
}
