import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { PhotosComponent } from '../photos/photos.component';
import { DepartmentComponent } from '../department/department.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: LoginComponent },
        { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
        { path: 'photos', component: PhotosComponent , canActivate: [AuthGuard] },
        { path: 'department', component: DepartmentComponent , canActivate: [AuthGuard] },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: '**', component: PagenotfoundComponent }
      ]
    )
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
