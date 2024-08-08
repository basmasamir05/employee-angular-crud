import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
  {path: 'employee/home', component:HomeComponent},
  {path: 'employee', redirectTo:'employee/home', pathMatch:'full'},
  {path: '', redirectTo:'employee/home', pathMatch:'full'},
  {path: 'employee/create', component:CreateComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
