import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {RoleService} from "../role.service";
import {DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-role-manger',
  templateUrl: './role-manger.component.html',
  styleUrls: ['./role-manger.component.css']
})
export class RoleMangerComponent implements OnInit {

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
  private roles:Array<any>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;
  constructor(public router: Router,public roleService:RoleService,public dialogService:DialogService) { }

  ngOnInit() {
    this.roleService.getAllRole().subscribe(
      result =>{
        console.log(result);
        this.roles = result.ddRoles;
        // this.totalNum = this.roles.length;
      }
    );

    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }

}
