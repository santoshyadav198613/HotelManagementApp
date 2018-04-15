import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee/employee';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(empList: Employee[], salary: number): Employee[] {
    return empList.filter((employee) => employee.salary > salary);
  }

}
