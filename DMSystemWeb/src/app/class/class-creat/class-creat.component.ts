import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../class.service";
import {BuiltInOptions, DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-class-creat',
  templateUrl: './class-creat.component.html',
  styleUrls: ['./class-creat.component.css']
})
export class ClassCreatComponent implements OnInit {

  classles = {
    coursename:'',
    ID:'',
    dailyWeight:'0.3',
    finalWeight:'0.7',
    picketLine:'3',
    classSession:'',
    classLocation:'',
    classDate:'',
    classOrder:'',
    shape:''
  };

  isPass ='';
  cdate:Array<any>;
  constructor(private routeInfo:ActivatedRoute,private classService:ClassService,public route:Router,
              public dialogService:DialogService) { }

  ngOnInit() {
    this.classService.getAllDate().subscribe(
      result =>{
        console.log(result.ddClassDates);
        this.cdate = result.ddClassDates;
      }
    );
  }

  cancel(){
    this.route.navigate(['./classk']);
  }

  save(){
    this.classService.createCourse(this.classles.coursename,this.classles.dailyWeight,this.classles.finalWeight,
    this.classles.picketLine,this.classles.classSession,this.classles.classLocation,this.classles.classDate,
      this.classles.classOrder,this.classles.ID,this.classles.shape).subscribe(
      result=>{
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

}
