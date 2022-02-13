import { ProjectComponent } from './projects/project.component';
import { ShowProjectComponent } from './projects/show-projects/show-projects.component';
import { TaskComponent } from './tasks/task.component';
import { ShowTaskComponent } from './tasks/show-tasks/show-tasks.component';
import { AddEditTaskComponent } from './tasks/add-edit-tasks/add-edit-tasks.component';
import { UserComponent } from './users/users.component';
import { ShowUserComponent } from './users/show-users/show-users.component';
import { AddEditUserComponent } from './users/add-edit-users/add-edit-users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddEditProjectComponent } from './projects/add-edit-projects/add-edit-projects.component';
import{SharedService} from './shared.service';



import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    AddEditUserComponent,
    ShowUserComponent,
    UserComponent,
    TaskComponent,
  AddEditTaskComponent,
  ShowTaskComponent,
  ProjectComponent,
  AddEditProjectComponent,
  ShowProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
