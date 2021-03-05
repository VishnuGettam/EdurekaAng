import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employee: Employee = {
    EmployeeId: 1,
    FirstName: 'Vishu',
    LastName: 'Gettam',
    Dept: 'IT',
    City: 'Chittoor',
    Email: 'vishnu@gmail.com',
  };
  displayEmployee: boolean = true;
  EditEmployee:boolean = false;

  constructor() {}

  ngOnInit(): void {}

  EditEmp(empId: number) {
    this.EditEmployee = true;
    this.displayEmployee = false;

  }

  UpdateEmp(emp:Employee) {

    this.employee.FirstName = emp.FirstName;
    this.employee.LastName = emp.LastName;
    this.employee.Dept= emp.Dept;
    this.employee.City = emp.City;
    this.employee.Email = emp.Email;

    this.displayEmployee = true;
    this.EditEmployee = false;
  }
}
