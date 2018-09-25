import { Component,OnInit } from '@angular/core';
import { EmployeesService } from './services/employees.service';
import { Employee } from './models/Employee';
import { $ } from '../../node_modules/protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movie
  employees:Employee[];
  constructor(private employeesService: EmployeesService){}
  ngOnInit(){
    $('#movie-searcher').on('keyup',(evt)=>{
        if(evt.keyCode==13) alert("enter");


    })
    this.employees=this.employeesService.employees;
  }

  storeInDB(){
    this.employeesService.storeEmployees();
  }
  getFromDB(){
    this.employeesService.getEmployees().subscribe(
      (response:any[])=>{
        this.employees=response;
      }
    );
  }
}
