import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor ( private employeeService : EmployeeService , private router : Router){}
  FormData : Employee ={
    id: 0,
    name : '',
    cin : '',
    salary : 0,
  }
  create() {
    this.employeeService.getAll().subscribe((allemployees)=>{
      this.FormData.id=allemployees.length+1;
      this.employeeService.creat(this.FormData).subscribe({
        next: () => {
          this.router.navigateByUrl('/employee/home');
        },
        error: (er: any) => {
          console.log(er);
        }
      });
    })                                                    
  }
  }