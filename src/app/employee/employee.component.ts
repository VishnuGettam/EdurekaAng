import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  empList:Employee[] ;

  // employee: Employee = {
  //   EmployeeId: 1,
  //   FirstName: 'Vishu',
  //   LastName: 'Gettam',
  //   Dept: 'IT',
  //   City: 'Chittoor',
  //   Email: 'vishnu@gmail.com',
  // };

  EditEmployee :boolean = false;
  EditEmployeeId:number=0;

  constructor() {
        this.empList = [
          {EmployeeId: 1,FirstName: 'Vishnu',LastName: 'Gettam',Dept: 'IT',City: 'Chittoor',Email: 'vishnu@gmail.com',Salary:500,DOB:"04/05/1990"},
          {EmployeeId: 2,FirstName: 'Prasad',LastName: 'Gettam',Dept: 'IT',City: 'Chittoor',Email: 'Prasad@gmail.com',Salary:2000,DOB:"04/06/1990"},
          {EmployeeId: 3,FirstName: 'Divya',LastName: 'Gettam',Dept: 'HR',City: 'Chittoor',Email: 'Divya@gmail.com',Salary:6500,DOB:"11/05/1989"},
          {EmployeeId: 4,FirstName: 'Vihaan',LastName: 'Gettam',Dept: 'IT',City: 'Chittoor',Email: 'vihaan@gmail.com',Salary:8700,DOB:"11/09/2013"}

      ];

  }

  ngOnInit(): void {}

  EditEmp(empId: number) {
    this.EditEmployeeId=empId;
    this.EditEmployee = true;


  }

  UpdateEmp(emp:Employee,updatedEmpId:number) {


    this.empList.forEach((empData,index)=>{
            if(empData.EmployeeId == updatedEmpId){
             empData.FirstName = emp.FirstName;
             empData.LastName = emp.LastName;
             empData.City= emp.City;
             empData.Dept = emp.Dept;
             empData.Email = emp.Email;
             empData.DOB = emp.DOB.toString();
             empData.Salary = emp.Salary
            }
    })
        this.EditEmployee = false;
        this.EditEmployeeId =0;
  }
}
