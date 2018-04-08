import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { DepartmentService } from './department/service/department.service';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PhotosComponent } from './photos/photos.component';
import { PostInterceptorService } from './posts/service/post-interceptor.service';

import { APP_PROVIDER, App_Values } from './appProvider/appProvider';
import { ENV_PROVIDER } from './envProvider/envProvider';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    DepartmentListComponent,
    HeaderComponent,
    HomeComponent,
    PostsComponent,
    PostsListComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DepartmentService,
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
    { provide: APP_PROVIDER, useValue: App_Values },
    { provide: ENV_PROVIDER, useValue: environment }],
  bootstrap: [AppComponent]
})
export class AppModule { }
