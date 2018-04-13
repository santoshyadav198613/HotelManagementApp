import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { PhotosComponent } from '../photos/photos.component';
import { DepartmentComponent } from '../department/department.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'employee', component: EmployeeComponent },
        { path: 'photos', component: PhotosComponent },
        { path: 'department', component: DepartmentComponent },
        { path: '', redirectTo: 'order', pathMatch: 'full' },
        { path: '**', component: PagenotfoundComponent }
      ]
    )
  ],
  exports : [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
