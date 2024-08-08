import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class EmployeeModule { }
