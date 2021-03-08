import { Employee2 } from './employee2';
import { EmployeeService } from './../services/employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newEmployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css'],
})
export class NewEmployeeComponent implements OnInit {
  EmpList: Employee2[] = [];
  constructor(private EmpService: EmployeeService) {}

  ngOnInit(): void {

    this.EmpService.GetEmployeeDetails().subscribe((empdata : any)=>{
      this.EmpList = empdata.data;
    },(error :any )=>{
      alert(error.error.message);
     // console.log(error);
    })
  }
}
