import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";

//http://localhost:5000/api/User
  constructor(private http:HttpClient) { }


  getUserList():Observable<any[]>{
    console.log(this.http.get<any>(this.APIUrl+'/User'));
    return this.http.get<any>(this.APIUrl+'/User');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/User',val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+'/User',val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'/User/'+val);
  }


  getTaskList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Task');
  }

  addTask(val:any){
    return this.http.post(this.APIUrl+'/Task',val);
  }

  updateTask(val:any){
    return this.http.put(this.APIUrl+'/Task',val);
  }

  deleteTask(val:any){
    return this.http.delete(this.APIUrl+'/Task/'+val);
  }


  getProjectList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Project');
  }

  addProject(val:any){
    return this.http.post(this.APIUrl+'/Project',val);
  }

  updateProject(val:any){
    return this.http.put(this.APIUrl+'/Project',val);
  }

  deleteProject(val:any){
    return this.http.delete(this.APIUrl+'/Project/'+val);
  }



}
