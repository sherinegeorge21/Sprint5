import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-projects.component.html',
  styleUrls: ['./add-edit-projects.component.css']
})
export class AddEditProjectComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() project:any;
  Id:number;
  Name:string;
  Detail:string;
  CreatedOn:string;

  ProjectsList:any=[];

  ngOnInit(): void {
    this.Id=this.project.Id;
    this.Name=this.project.Name;
    this.Detail=this.project.Detail;
    this.CreatedOn=this.project.CreatedOn;
  }



  addProject(){
    var val = {Id:this.Id,
        Name:this.Name,
      Detail:this.Detail,
      CreatedOn:this.CreatedOn};

    this.service.addProject(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateProject(){
    var val = {Id:this.Id,
      Name:this.Name,
      Detail:this.Detail,
      CreatedOn:this.CreatedOn};

    this.service.updateProject(val).subscribe(res=>{
    alert(res.toString());
    });
  }




}

