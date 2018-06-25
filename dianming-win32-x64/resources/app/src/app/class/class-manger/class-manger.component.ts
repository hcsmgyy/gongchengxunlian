import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {ClassService} from "../class.service";
import {BuiltInOptions, DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-class-manger',
  templateUrl: './class-manger.component.html',
  styleUrls: ['./class-manger.component.css']
})
export class ClassMangerComponent implements OnInit {

  // page :Array[any];
  //分页代码
  isPass ='';
  public totalNum = 12;  //总数据条数
  public pageSize = 10; //每页数条数
  public pageData = this.pageSize;  //每页数据
  public totalPage = Math.floor((this.totalNum - 1) / this.pageData) + 1;//总页数
  public curPage = 1;//当前页码
  getPageData(pageNo) {
    let self = this;
    self.curPage = pageNo;
    this.pageSize = this.pageData * pageNo;
  }
  public totalNum1 = 12;
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


  private classs:Array<any>;
  private nameFilter: FormControl = new FormControl();
//  private keyword: string;
  constructor(public router:Router,public classService:ClassService,public dialogService:DialogService) { }

  ngOnInit() {
    this.classService.getAllClass().subscribe(
      result=>{
        console.log(result);
        this.classs = result.courses;
      }
    );
  }

  delete(name){
    console.log(name);
    this.classService.deleteCourse(name).subscribe(
      result=>{
        console.log(result.state);
        this.isPass = result.state;

        if (this.isPass == '1') {

          console.log("删除成功");
          this.dialogService.show(<BuiltInOptions>{
            content: '删除成功',
            icon: 'success',
            size: 'sm',
            showCancelButton: false,
          });
        }
        else {
          console.log("删除失败");
        }
      });
  }

}
