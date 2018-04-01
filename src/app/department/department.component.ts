import {
  Component, OnInit, ViewChild, ViewChildren, QueryList
  , AfterViewInit, ViewEncapsulation
} from '@angular/core';

import { DepartmentListComponent } from './department-list/department-list.component';
import { Department } from './department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: { 'class': 'app-department' }
})
export class DepartmentComponent implements OnInit, AfterViewInit {
  deptList: Department[] = [];
  @ViewChild(DepartmentListComponent)
  departmentListComponent: DepartmentListComponent;
  @ViewChild('sampleDiv') divComponent: any;
  @ViewChildren(DepartmentListComponent)
  departmentChildrentListComponent: QueryList<DepartmentListComponent>;
  constructor() {
    this.deptList = [
      { id: 1, name: 'IT', head: 'Anand', count: 200 },
      { id: 1, name: 'Marketing', head: 'Amit', count: 100 },
      { id: 1, name: 'Finance', head: 'James', count: 300 }
    ]
  }

  ngOnInit() {
    console.log(this.departmentChildrentListComponent);
    this.departmentListComponent.departmentList = this.deptList;
  }

  loadDepartment() {
    // this.departmentListComponent.departmentList = this.deptList;
    console.log(this.departmentChildrentListComponent);
    this.departmentChildrentListComponent.forEach((component) => {
      component.departmentList = this.deptList;
    })
    console.log(this.divComponent);
  }

  ngAfterViewInit(): void {
    console.log(this.departmentChildrentListComponent);
    this.departmentChildrentListComponent.forEach((component) => {
      setTimeout(() => {
        component.departmentList = this.deptList;
      }, 0);
    })
  }

}
