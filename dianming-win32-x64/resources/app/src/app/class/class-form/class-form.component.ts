import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../user/user.service";
import {ClassService} from "../class.service";
import {BuiltInOptions, DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {

  public static cdate:any;
  isPass = '';
  cname = '';
  formModel:FormGroup;
  private classs:Array<any>;
  constructor(private routeInfo:ActivatedRoute,private classService:ClassService,public router:Router,
              public dialogService: DialogService) { }

  ngOnInit() {
    let classname = this.routeInfo.snapshot.params['name'];
    this.classService.getClassByName(classname).subscribe(
      result=>{
        this.classs = result.course;
        let fb = new FormBuilder();
        this.cname = this.classs[0].courseName;
        this.formModel = fb.group({
          name:[this.classs[0].courseName,Validators.required],
          ID:[this.classs[0].ID,Validators.required],
          dailyWeight:[this.classs[0].dailyWeight,Validators.required],
          finalWeight:[this.classs[0].finalWeight,Validators.required],
          picketLine:[this.classs[0].picketLine,Validators.required],
          classSession:[this.classs[0].classSession,Validators.required],
          classLocation:[this.classs[0].classLocation,Validators.required],
          classDate:[this.classs[0].classDate,Validators.required],
          classOrder:[this.classs[0].classOrder,Validators.required],
          shape:[this.classs[0].shape,Validators.required]
        });
      }
    );
  }

  cancel(){
    // this.dialogService.addDialog(ConfirmComponent, { title: 'Alert title!', message: 'Alert message!!!' });
    this.router.navigate(['./classk']);
  }

  save(){
    console.log(this.formModel.value.name);
    console.log(this.formModel.value.ID);
    console.log(this.formModel.value.dailyWeight);
    console.log(this.formModel.value.finalWeight);
    console.log(this.formModel.value.picketLine);
    console.log(this.formModel.value.classSession);
    console.log(this.formModel.value.classLocation);
    console.log(this.formModel.value.classDate);
    console.log(this.formModel.value.classOrder);
    console.log(this.formModel.value.shape);
    this.classService.getDateByName(this.formModel.value.classDate).subscribe(
      result=>{
        ClassFormComponent.cdate = result.ddClassDate.classDate;
        console.log(ClassFormComponent.cdate);
            this.classService.updateCourse(this.formModel.value.name,this.formModel.value.dailyWeight,this.formModel.value.finalWeight,
              this.formModel.value.picketLine,this.formModel.value.classSession,this.formModel.value.classLocation,
              ClassFormComponent.cdate, this.formModel.value.classOrder,this.formModel.value.ID,this.formModel.value.shape).subscribe(
              result=>{
                console.log(result.state);
                this.isPass = result.state;
                if(this.isPass == '1'){
                  console.log("更新成功");
                }
                else {
                  console.log("更新失败");
                }
              }
            );
            // console.log(this.formModel.value.password);
          }
    );
    this.dialogService.show(<BuiltInOptions>{
      content: '更新成功',
      icon: 'success',
      size: 'sm',
      showCancelButton: false,
    });
  }

}
