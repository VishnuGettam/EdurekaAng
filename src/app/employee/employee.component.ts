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

  constructor() {}

  ngOnInit(): void {}

  EditEmp(empId: number) {
    alert('Edit - ' + empId);
  }

  UpdateEmp(empId: number) {
    alert('Update - ' + empId);
  }
}
