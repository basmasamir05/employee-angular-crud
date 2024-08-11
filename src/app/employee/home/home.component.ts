import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  allemployees : Employee[] = [] ;
constructor( private employeeService: EmployeeService){}

ngOnInit(): void {
  this.employeeService.getAll().subscribe((data)=>{
    this.allemployees = data;
  })
}
deleteItem(id : number){
  this.employeeService.delete(id).subscribe({
    next :(data)=>{
      this.allemployees=this.allemployees.filter(_=>_.id != id)
    },
  })
}
}