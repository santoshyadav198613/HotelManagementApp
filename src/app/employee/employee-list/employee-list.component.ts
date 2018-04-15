import { Component, OnInit, Input, Output, EventEmitter,
   OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges ,OnDestroy  {
  @Input() employeeList: Employee[] = [];
  @Input() title: string;
  @Output() selectedEmployee = new EventEmitter<Employee>();
  salary : number = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
  ngOnInit() {
  }

  sendSelected(emp: Employee) {
    console.log(emp);
    this.selectedEmployee.emit(emp);
  }

  ngOnDestroy(): void{
    alert('Are you sure you want to destroy this component');
  }

}
