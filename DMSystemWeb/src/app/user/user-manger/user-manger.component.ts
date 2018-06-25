import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {User, UserService} from "../user.service";
import {FormControl} from "@angular/forms";
import  'rxjs/Rx';
import {BuiltInOptions, DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-user-manger',
  templateUrl: './user-manger.component.html',
  styleUrls: ['./user-manger.component.css']
})
export class UserMangerComponent implements OnInit {

  isPass = '';
  // page :Array[any];
  public totalNum = 100;  //总数据条数
  public pageSize = 10; //每页数条数
  public pageData = this.pageSize;  //每页数据
  public totalPage = Math.floor((this.totalNum - 1) / this.pageData) + 1;//总页数
  public curPage = 1;//当前页码
  getPageData(pageNo) {
    let self = this;
    self.curPage = pageNo;
    this.pageSize = this.pageData * pageNo;
  }


  public totalNum1 = 100;
  public pageSize1 = 6;
  public pageData1 = 6;
  public totalPage1 = Math.floor((this.totalNum1 - 1) / this.pageData1) + 1;//总页数
  public curPage1 = 1;//当前页码
  getPageData1(pageNo1) {
    console.log(pageNo1);
    let self = this;
    self.curPage1 = pageNo1;
    this.pageSize = this.pageData1 * pageNo1;
  }
  private users:Array<any>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;

  constructor(public router: Router,public userService:UserService,public dialogService:DialogService) {

  }

  ngOnInit() {
    // this.users = this.userService.getUsers();
    this.userService.getAllUser().subscribe(
      result =>{
        console.log(result);
        this.users = result.personnels;
        this.totalNum = this.users.length;
      }
    );

    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }



  delete(id){
    console.log(id);
    this.userService.deletePersonById(id).subscribe(
      result=>{
        console.log(result.state);
        this.isPass = result.state;

        if (this.isPass == '0') {
          console.log("删除失败");
        }
        else {
          console.log("删除成功");
          this.dialogService.show(<BuiltInOptions>{
            content: '删除成功',
            icon: 'success',
            size: 'sm',
            showCancelButton: false,
          });
          this.router.navigateByUrl('user2');
        }
      });
  }

}


