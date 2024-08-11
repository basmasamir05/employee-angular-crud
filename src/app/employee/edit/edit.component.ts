/*import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] 
})
export class EditComponent implements OnInit{
    constructor(
      private employeeService : EmployeeService,
      private router : Router,
      private route : ActivatedRoute
    ){}
    formdata : Employee = {
      id: 0,
      name : '',
      cin : '',
      salary : 0,
    }
    ngOnInit(): void {
      this.route.paramMap.subscribe((param) => {
        const id = Number(param.get('id'));
        console.log('Fetched ID:', id);  // Debugging line to check the ID
        this.getById(id);
    });
    }
    getById(id: number) {
       this.employeeService.edit(id).subscribe(
        (data) => {
            this.formdata = data;
        },
        (error) => {
            console.error('Error fetching employee data:', error);
        }
    );
    }
  
    update(){
      this.employeeService.updat(this.formdata).subscribe({
          next: (data) => {
            this.router.navigate(['/employee/home']);
          },
          error: (er: any) => {
            console.log(er);
          }
        });
      }                     
}
*/