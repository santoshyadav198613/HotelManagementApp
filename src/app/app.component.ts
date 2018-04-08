import { Component, OnInit, Inject } from '@angular/core';

import { DepartmentService } from './department/service/department.service';

import { ENV_PROVIDER } from './envProvider/envProvider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1>Hello World.
  // </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private departmentService: DepartmentService,
    @Inject(ENV_PROVIDER) private envProvider: any) {

  }

  ngOnInit() {
    console.log(this.envProvider.apiEndpoint);
    this.departmentService.getDepartments();
    this.departmentService.addDepartment();
  }

}
