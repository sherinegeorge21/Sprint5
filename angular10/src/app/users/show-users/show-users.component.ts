import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any=[];

  ModalTitle:string;
  ActivateAddEditUserComp:boolean=false;
  user:any;

  UserIdFilter:string="";
  FirstNameFilter:string="";
  UserListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){
    this.user={
      id:"",
      firstName:"",
      lastName:"",
      email:"",
      password:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditUserComp=true;

  }

  editClick(item){
    this.user=item;
    this.ModalTitle="Edit User";
    this.ActivateAddEditUserComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteUser(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditUserComp=false;
    this.refreshUserList();
  }


  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data;
      this.UserListWithoutFilter=data;
    });
  }

  FilterFn(){
    var UserIdFilter = this.UserIdFilter;
    var FirstNameFilter = this.FirstNameFilter;

    this.UserList = this.UserListWithoutFilter.filter(function (el){
        return el.Id.toString().toLowerCase().includes(
         UserIdFilter.toString().trim().toLowerCase()
        )&&
        el.FirstName.toString().toLowerCase().includes(
          FirstNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.UserList = this.UserListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
