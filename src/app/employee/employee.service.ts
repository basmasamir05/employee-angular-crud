import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/employees';
  constructor( private http: HttpClient) {}
  getAll(){
    return this.http.get<Employee[]>(this.baseUrl);
  }
  creat(employee : Employee){
      return this.http.post(this.baseUrl,employee);                                                                                                                                                                                                                                                                                                                                                                                                        
  }
  /*edit(id: number){
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
  updat(data:Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/${data.id}`,data);
  }
  */
  delete(id: number){
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}