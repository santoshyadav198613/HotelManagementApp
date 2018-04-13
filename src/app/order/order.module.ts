import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
