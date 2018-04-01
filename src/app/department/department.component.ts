import {
  Component, OnInit, ViewChild, ViewChildren, QueryList
  , AfterViewInit, ViewEncapsulation , SkipSelf , Host
} from '@angular/core';

import { DepartmentListComponent } from './department-list/department-list.component';
import { Department } from './department';

import { DepartmentService } from './service/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: { 'class': 'app-department' },
  providers : [DepartmentService]
})
export class DepartmentComponent implements OnInit, AfterViewInit {
  deptList: Department[] = [];
  @ViewChild(DepartmentListComponent)
  departmentListComponent: DepartmentListComponent;
  @ViewChild('sampleDiv') divComponent: any;
  @ViewChildren(DepartmentListComponent)
  departmentChildrentListComponent: QueryList<DepartmentListComponent>;
  // departmentService = new DepartmentService();
  constructor(@Host() private departmentService: DepartmentService) {
    
  }

  ngOnInit() {
    this.deptList = this.departmentService.getDepartments();
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
