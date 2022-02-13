import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  TaskList:any=[];

  ModalTitle:string;
  ActivateAddEditTaskComp:boolean=false;
  task:any;

  ngOnInit(): void {
    this.refreshTaskList();
  }

  addClick(){
    this.task={
      Id:0,
      ProjectId:0,
      Status:0,
      AssignedToUserID:0,
      Detail:"",
      CreatedOn:""
    }
    this.ModalTitle="Add Task";
    this.ActivateAddEditTaskComp=true;

  }

  editClick(item){
    console.log(item);
    this.task=item;
    this.ModalTitle="Edit Task";
    this.ActivateAddEditTaskComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteTask(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshTaskList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();
  }


  refreshTaskList(){
    this.service.getTaskList().subscribe(data=>{
      this.TaskList=data;
    });
  }

}

