import { TestBed, inject } from '@angular/core/testing';

import { PostInterceptorService } from './post-interceptor.service';

describe('PostInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostInterceptorService]
    });
  });

  it('should be created', inject([PostInterceptorService], (service: PostInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
