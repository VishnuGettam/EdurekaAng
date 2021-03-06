import { Injectable } from '@angular/core';
import { Employee2 } from '../newemployee/employee2';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService  {
  constructor() {}

  NewEmployeeList: Employee2[] = [
    {
      id: 1,
      employee_name: 'Vishnu Prasad',
      employee_salary: 16500,
      employee_age: 30,
      profile_image: 'N/A',
    },
    {
      id: 2,
      employee_name: 'Vishnu ',
      employee_salary: 85500,
      employee_age: 30,
      profile_image: 'N/A',
    },
    {
      id: 3,
      employee_name: 'Divya',
      employee_salary: 4200,
      employee_age: 2,
      profile_image: 'N/A',
    },
    {
      id: 4,
      employee_name: 'Vihaan Gettam',
      employee_salary: 17030,
      employee_age: 15,
      profile_image: 'N/A',
    },
    {
      id: 5,
      employee_name: 'Test User',
      employee_salary: 3950,
      employee_age: 12,
      profile_image: 'N/A',
    },
  ];

  GetEmployeeDetails(): Employee2[] {
    return this.NewEmployeeList;
  }
}
