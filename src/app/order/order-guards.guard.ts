import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OrderComponent } from './order.component';

@Injectable()
export class OrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(component: OrderComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.orderForm.pristine;
  }
}
