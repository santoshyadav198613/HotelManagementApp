import { Component, OnInit, Inject } from '@angular/core';

import { DepartmentService } from './department/service/department.service';

import { ENV_PROVIDER } from './envProvider/envProvider';
import { LoginService } from './login/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1>Hello World.
  // </h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hotel Management App';

  constructor(private departmentService: DepartmentService,
    @Inject(ENV_PROVIDER) private envProvider: any,
    public loginService: LoginService) {

  }

  ngOnInit() {
    console.log(this.envProvider.apiEndpoint);
    this.departmentService.getDepartments();
    this.departmentService.addDepartment();
  }

}
