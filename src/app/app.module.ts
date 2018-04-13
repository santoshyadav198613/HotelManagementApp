import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routing/routing.module';
import { PostsModule } from './posts/posts.module';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { DepartmentService } from './department/service/department.service';
import { PhotosComponent } from './photos/photos.component';
import { PostInterceptorService } from './posts/service/post-interceptor.service';

import { APP_PROVIDER, App_Values } from './appProvider/appProvider';
import { ENV_PROVIDER } from './envProvider/envProvider';
import { environment } from '../environments/environment';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/service/login.service';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    DepartmentListComponent,
    HeaderComponent,
    HomeComponent,
    PhotosComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PostsModule,
    OrderModule,
    RoutingModule
  ],
  providers: [DepartmentService,
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
    { provide: APP_PROVIDER, useValue: App_Values },
    { provide: ENV_PROVIDER, useValue: environment },
    AuthGuard,
    LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
