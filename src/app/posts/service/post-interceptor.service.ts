import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method === 'GET') {
      const request = req.clone({ headers: new HttpHeaders().set('password', 'dfdsf') });
      return next.handle(request);
    }

    return next.handle(req);
  }

} 
