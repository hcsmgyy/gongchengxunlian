import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RollcallService} from "../rollcall.service";
import {BuiltInOptions, DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-rollcall-create',
  templateUrl: './rollcall-create.component.html',
  styleUrls: ['./rollcall-create.component.css']
})
export class RollcallCreateComponent implements OnInit {

  rollcall = {
    id:'',
    courseName: '',
    tid: '',
    state:'',
    date:'',
    position:''
  };

  cstate:Array<any>;
  isPass = '';

  constructor(private routeInfo:ActivatedRoute,private callService:RollcallService,public route:Router,
              public dialogService:DialogService) { }

  ngOnInit() {
    this.callService.getAllState().subscribe(
      result =>{
        console.log(result.ddStates);
        this.cstate = result.ddStates;
      }
    );
  }

  save(){
    //coursename,callstate,calldate,callposition,id
    console.log(this.rollcall.courseName);
    this.callService.createRollcall(this.rollcall.courseName,this.rollcall.state,this.rollcall.date,this.rollcall.position,this.rollcall.tid).subscribe(
      result=>{
        console.log(this.rollcall.courseName);
        console.log(this.rollcall.state);
        console.log(this.rollcall.date);
        console.log(this.rollcall.position);
        console.log(this.rollcall.tid);
        console.log(result.state);
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
    this.route.navigate(['./rollcall']);
  }

}
