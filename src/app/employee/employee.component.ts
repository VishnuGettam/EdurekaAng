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
          {EmployeeId: 1,FirstName: 'Vishnu',LastName: 'Gettam',Dept: 'IT',City: 'Chittoor',Email: 'vishnu@gmail.com',},
          {EmployeeId: 2,FirstName: 'Prasad',LastName: 'Gettam',Dept: 'IT',City: 'Chittoor',Email: 'Prasad@gmail.com',},
          {EmployeeId: 3,FirstName: 'Divya',LastName: 'Gettam',Dept: 'HR',City: 'Chittoor',Email: 'Divya@gmail.com',},
          {EmployeeId: 4,FirstName: 'Vihaan',LastName: 'Gettam',Dept: 'IT',City: 'Chittoor',Email: 'vihaan@gmail.com',}

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
            }
    })
        this.EditEmployee = false;
        this.EditEmployeeId =0;
  }
}
