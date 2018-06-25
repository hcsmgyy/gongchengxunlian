import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserService} from "../user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { BuiltInOptions, DialogService} from "ngx-bootstrap-modal";
import {ConfirmComponent} from "../../confirm/confirm.component";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // public umajor:any;
  public static umajor:any;
  public static urole:any;
  // urole:any;
  isPass = '';
  uid = '';
  formModel: FormGroup;
  private users:Array<any>;
  // role = ['学生','教师','管理员'];
  constructor(private routeInfo:ActivatedRoute,private userService:UserService,public router:Router,
              public dialogService: DialogService) { }

  ngOnInit() {
    let cardId = this.routeInfo.snapshot.params['id'];
    this.userService.getPersonById(cardId).subscribe(
      result=>{
        this.users = result.personnel;
        let fb = new FormBuilder();
        console.log(this.users[0].Ppassword);
        this.uid = this.users[0].ID;
        this.formModel = fb.group({
          cardid:[this.users[0].ID,Validators.required],
          name:[this.users[0].Pname,Validators.required],
          password:[this.users[0].Ppassword,Validators.required],
          classId:[this.users[0].pclass,Validators.required],
          major:[this.users[0].major,Validators.required],
          role:[this.users[0].role,Validators.required]
        }
        );
      // role:fb.array([
      //   new FormControl(this.user.role.indexOf(this.role[0]) != -1),
      //   new FormControl(this.user.role.indexOf(this.role[1]) != -1),
      //   new FormControl(this.user.role.indexOf(this.role[2]) != -1)
      // ])
    });
  }

  cancel(){
    // this.dialogService.addDialog(ConfirmComponent, { title: 'Alert title!', message: 'Alert message!!!' });
    this.router.navigate(['./user']);
  }

  save(){
    this.userService.getMajorByName(this.formModel.value.major).subscribe(
      result=>{
        UserFormComponent.umajor = result.ddMajor.major;
        this.userService.getRoleByName(this.formModel.value.role).subscribe(
          result=>{
            UserFormComponent.urole = result.ddRole.role;
            this.userService.updatePerson(this.formModel.value.cardid,this.formModel.value.name,this.formModel.value.password,UserFormComponent.umajor,this.formModel.value.classId,UserFormComponent.urole).subscribe(
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
            console.log(this.formModel.value.password);
          }
        );
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

