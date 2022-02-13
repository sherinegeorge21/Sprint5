import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.css']
})
export class AddEditTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() task:any;
  Id:number;
  ProjectId:number;
  Status:number;
  AssignedToUserID:number;
  Detail:string;
  CreatedOn:string;

  TasksList:any=[];

  ngOnInit(): void {
    this.Id=this.task.Id;
    this.ProjectId=this.task.ProjectId;
    this.Status=this.task.Status;
    this.AssignedToUserID=this.task.AssignedToUserID;
    this.Detail=this.task.Detail;
    this.CreatedOn=this.task.CreatedOn;
  }



  addTask(){
    var val = {Id:this.Id,
      ProjectId:this.ProjectId,
      Status:this.Status,
      AssignedToUserID:this.AssignedToUserID,
      Detail:this.Detail,
      CreatedOn:this.CreatedOn};

    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTask(){
    var val = {Id:this.Id,
      ProjectId:this.ProjectId,
      Status:this.Status,
      AssignedToUserID:this.AssignedToUserID,
      Detail:this.Detail,
      CreatedOn:this.CreatedOn};

    this.service.updateTask(val).subscribe(res=>{
    alert(res.toString());
    });
  }




}

