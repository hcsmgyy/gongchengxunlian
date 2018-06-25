import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {SignService} from "../sign.service";
import {DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-sign-manger',
  templateUrl: './sign-manger.component.html',
  styleUrls: ['./sign-manger.component.css']
})
export class SignMangerComponent implements OnInit {

  // page :Array[any];
  public totalNum = 10;  //总数据条数
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
  private signs:Array<any>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;
  constructor(public router: Router,public signService:SignService,public dialogService:DialogService) { }

  ngOnInit() {
    this.signService.getAllState().subscribe(
      result =>{
        console.log(result);
        this.signs = result.ddStates;
        // this.totalNum = this.roles.length;
      }
    );
  }

}
