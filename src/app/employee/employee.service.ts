import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient) {}
  getAll(){
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }
  creat(data : Employee){
      return this.http.post('http://localhost:3000/employees',data);                                                                                                                                                                                                                                                                                                                                                                                                        
  }
}