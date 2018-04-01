import { Component, OnInit, AfterContentInit , ContentChild } from '@angular/core';

import { EmployeeComponent } from  '../employee/employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employeeComponent: EmployeeComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void{
    console.log('contents are loaded');
    console.log(this.employeeComponent);
    this.employeeComponent.title = 'Loaded inside home page';
  }

}
