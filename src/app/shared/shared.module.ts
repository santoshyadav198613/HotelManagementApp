import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamePipe } from '../custom/name.pipe';
import { SalaryPipe } from '../custom/salary.pipe';
import { HoverDirective } from '../custom/hover/hover.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NamePipe,
    SalaryPipe,
    HoverDirective
  ],
  declarations: [NamePipe, SalaryPipe, HoverDirective]
})
export class SharedModule { }
