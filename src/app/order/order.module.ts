import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../guards/auth.guard';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        { path: 'order', component: OrderComponent , canActivate: [AuthGuard] }
      ]
    )
  ],
  declarations: [
    OrderComponent
  ]
})
export class OrderModule { }
