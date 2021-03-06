import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamePipe } from '../custom/name.pipe';
import { SalaryPipe } from '../custom/salary.pipe';
import { HoverDirective } from '../custom/hover/hover.directive';
import { ShortnamePipe } from '../custom/shortname/shortname.pipe';

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
    HoverDirective,
    ShortnamePipe
  ],
  declarations: [NamePipe, SalaryPipe, HoverDirective, ShortnamePipe]
})
export class SharedModule { }
