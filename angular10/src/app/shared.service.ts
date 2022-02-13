import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";
//http://localhost:5000/api/User
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');

  }

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
