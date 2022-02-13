import { ProjectComponent } from './projects/project.component';
import { TaskComponent } from './tasks/task.component';
import { UserComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {DepartmentComponent} from './department/department.component';


const routes: Routes = [
{path:'employee',component:EmployeeComponent},
{path:'department',component:DepartmentComponent},
{path:'user',component:UserComponent},
{path:'task',component:TaskComponent},
{path:'project',component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
