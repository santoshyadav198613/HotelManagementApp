import { Component, OnInit, DoCheck } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  host: { 'class': 'app-employee' },  
})
export class EmployeeComponent implements OnInit, DoCheck {
  empList: Employee[] = [];
  color: string = 'blue';
  departmentName: string = 'Marketing';
  isVisible: boolean = false;
  role: string = 'Super Admin';
  title: string = 'Employee List';
  constructor() {
  }

  ngOnInit() {
    this.empList = [
      {
        id: 1, name: 'Paul', department: 'IT', email: 'paul@test.com', salary: 2000
      },
      {
        id: 2, name: 'Alexis', department: 'Marketing', email: 'Alexis@test.com', salary: 3000
      },
      {
        id: 3, name: 'Raul', department: 'IT', email: 'Raul@test.com', salary: 4000
      },
    ]
  }

  ngDoCheck(): void {
    console.log('This is do check event');
  }

  toggle() {
    this.isVisible = !this.isVisible;
    this.title = 'New Employee List';
  }

  receiveEmployee(employee: Employee) {
    console.log(employee);
  }

}
