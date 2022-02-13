import { ProjectComponent } from './projects/project.component';
import { TaskComponent } from './tasks/task.component';
import { UserComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
{path:'user',component:UserComponent},
{path:'task',component:TaskComponent},
{path:'project',component:ProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
