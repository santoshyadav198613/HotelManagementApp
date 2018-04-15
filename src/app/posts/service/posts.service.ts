import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Posts } from './posts';

import { APP_PROVIDER } from '../../appProvider/appProvider';
import { IAppProvider } from '../../appProvider/IappProvider';

@Injectable()
export class PostsService {

  constructor(isLoggedIn : boolean,  private http: HttpClient, @Inject(APP_PROVIDER) private appProvider: IAppProvider) { 
    console.log(isLoggedIn);
  }

  getPosts() {
    return this.http.get<Posts[]>(this.appProvider.apiEndpoint + 'posts',
      {
        headers: new HttpHeaders().set('apiKey', this.appProvider.apiKey).set('apiPwd', 'thisispassword')
      });
  }

  savePost(post: Posts) {
    return this.http.post<Posts>(this.appProvider.apiEndpoint + 'posts', post,
      {
        headers: new HttpHeaders().set('apiKey', this.appProvider.apiKey).set('apiPwd', 'thisispassword')
      });
  }

  updatePost(post: Posts) {
    return this.http.put(this.appProvider.apiEndpoint + 'posts/' + post.id, post,
      {
        headers: new HttpHeaders().set('apiKey', this.appProvider.apiKey).set('apiPwd', 'thisispassword')
      });
  }

  deletePost(id: number) {
    return this.http.delete(this.appProvider.apiEndpoint + 'posts/' + id,
      {
        headers: new HttpHeaders().set('apiKey', this.appProvider.apiKey).set('apiPwd', 'thisispassword')
      });
  }

  getPostById(id: number) {
    return this.http.get<Posts>(this.appProvider.apiEndpoint + 'posts/' + id);
  }

}
