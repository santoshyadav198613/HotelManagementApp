import { TestBed, async, inject } from '@angular/core/testing';

import { OrderGuard } from './order-guards.guard';

describe('OrderGuardsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderGuard]
    });
  });

  it('should ...', inject([OrderGuard], (guard: OrderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
