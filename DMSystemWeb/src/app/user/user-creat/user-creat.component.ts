import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormGroup} from "@angular/forms";
import {BuiltInOptions, DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-user-creat',
  templateUrl: './user-creat.component.html',
  styleUrls: ['./user-creat.component.css']
})
export class UserCreatComponent implements OnInit {

  user = {
    id:'',
    name: '',
    pwd: '',
    major:'',
    role:'',
    class:''
  };

  urole:Array<any>;
  umajor:Array<any>;
  isPass = '';
  constructor(private routeInfo:ActivatedRoute,private userService:UserService,public route:Router,
              public dialogService:DialogService) { }

  ngOnInit() {
    this.userService.getAllRole().subscribe(
      result =>{
        console.log(result.ddRoles);
        this.urole = result.ddRoles;
      }
    );
    this.userService.getAllMajor().subscribe(
      result =>{
        this.umajor = result.ddMajors;
      }
    );
  }

  save(){
    this.userService.createPerson(this.user.id,this.user.name,this.user.pwd,this.user.major,this.user.class,this.user.role).subscribe(
      result=>{
        console.log(result.state);
        console.log(this.user.id);
        this.isPass = result.state;
        if(this.isPass == '1'){
          console.log("添加成功");
          this.dialogService.show(<BuiltInOptions>{
            content: '添加成功',
            icon: 'success',
            size: 'sm',
            showCancelButton: false,
          });
        }
        else {
          console.log("添加失败");
          this.dialogService.show(<BuiltInOptions>{
            content: '添加失败',
            icon: 'error',
            size: 'sm',
            showCancelButton: false,
          });
        }
      }
    );
  }

  cancel(){
    this.route.navigate(['user2'],{relativeTo:this.routeInfo});
  }

}
