import { Component, OnInit } from '@angular/core';

import { DepartmentService } from './department/service/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1>Hello World.
  // </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private departmentService:DepartmentService ){

  }

  ngOnInit() {
    this.departmentService.getDepartments();
    this.departmentService.addDepartment();
  }

}
