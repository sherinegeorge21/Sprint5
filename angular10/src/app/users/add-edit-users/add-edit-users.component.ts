import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() user:any;
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  password:string;

  ngOnInit(): void {
    this.id=this.user.id;
    this.firstName=this.user.firstName;
    this.lastName=this.user.lastName;
    this.email=this.user.email;
    this.password=this.user.password;
  }

  addUser(){
    var val = {id:this.id,
      firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password};
    this.service.addUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUser(){
    var val = {id:this.id,
      firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password};
    this.service.updateUser(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
