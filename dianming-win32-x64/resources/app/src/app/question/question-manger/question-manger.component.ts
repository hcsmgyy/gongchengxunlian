import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {QuestionService} from "../question.service";
import {DialogService} from "ngx-bootstrap-modal";

@Component({
  selector: 'app-question-manger',
  templateUrl: './question-manger.component.html',
  styleUrls: ['./question-manger.component.css']
})
export class QuestionMangerComponent implements OnInit {

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


  public totalNum1 = 50;
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
  private questions:Array<any>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;

  constructor(public router: Router,public questionService:QuestionService,public dialogService:DialogService) {

  }

  ngOnInit() {
    this.questionService.getAllQuestion().subscribe(
      result =>{
        console.log(result);
        this.questions = result.questions;
        this.totalNum = this.questions.length;
      }
    );

    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }

}
