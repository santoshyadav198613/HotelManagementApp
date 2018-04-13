import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        { path: 'order', component: OrderComponent }
      ]
    )
  ],
  declarations: [
    OrderComponent
  ]
})
export class OrderModule { }
