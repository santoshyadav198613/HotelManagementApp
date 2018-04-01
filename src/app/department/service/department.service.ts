import { Injectable } from '@angular/core';

import { Department } from '../department';

@Injectable()
export class DepartmentService {

  deptList: Department[] = [{ id: 1, name: 'IT', head: 'Anand', count: 200 },
  { id: 2, name: 'Marketing', head: 'Amit', count: 100 },
  { id: 3, name: 'Finance', head: 'James', count: 300 }];
  constructor() {
    console.log('Department Service is created');
  }

  getDepartments() {
    return this.deptList;
  }

  addDepartment() {
    let department: Department = { id: 4, name: 'Advertising', head: 'James', count: 500 };
    this.deptList.push(department);
  }
}
