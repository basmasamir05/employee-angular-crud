import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http: HttpClient) {}
  getAll(){
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }
  creat(employee : Employee){
    return this.http.post('http://localhost:3000/employees',employee);                                                                                                                                                                                                                                                                                                                                                                                                        
}

edit(id: number): Observable<Employee>{
  return this.http.get<Employee>(`http://localhost:3000/employees/${id}`);
}

update(employee:Employee): Observable<Employee>{
  return this.http.put<Employee>(`http://localhost:3000/employees/${employee.id}`,employee);
}
}