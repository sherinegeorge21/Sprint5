import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProjectList:any=[];

  ModalTitle:string;
  ActivateAddEditProjectComp:boolean=false;
  project:any;

  ngOnInit(): void {
    this.refreshProjectList();
  }

  addClick(){
    this.project={
      Id:0,
      Name:"",
      Detail:"",
      CreatedOn:""
    }
    this.ModalTitle="Add Project";
    this.ActivateAddEditProjectComp=true;

  }

  editClick(item){
    console.log(item);
    this.project=item;
    this.ModalTitle="Edit Project";
    this.ActivateAddEditProjectComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteProject(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshProjectList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProjectComp=false;
    this.refreshProjectList();
  }


  refreshProjectList(){
    this.service.getTaskList().subscribe(data=>{
      this.ProjectList=data;
    });
  }

}

