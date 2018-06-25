import {Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http: Http) {
    console.log('Hello RedditDataProvider Provider');
  }

  postLogin(id, password){
    let url = this.hurl + '/shhTest/personnelaction/CheckPersonnel?id=' + id + '&password=' + password;
    return this.http.get(url).map(res => res.json());
  }

  getPersonById(id){
    let url = this.hurl + '/shhTest/personnelaction/getPersonnelByID?id='+id;
    return this.http.get(url).map(res => res.json());
  }

  getCourseById(id){
    let url = this.hurl + '/shhTest/markaction/getMarkByID?id='+id;
    return this.http.get(url).map(res => res.json());
  }

  getCourseByName(name) {
    let url = this.hurl + '/shhTest/courseaction/getCourseByName?coursename=' + name;
    return this.http.get(url).map(res => res.json());
  }

  countCallTheRoll(id, state, coursename) {
    let url = this.hurl + '/shhTest/calltherollaction/countCallTheRoll?id=' + id + '&callstate=' + state +
      '&coursename=' + coursename;
    return this.http.get(url).map(res => res.json());
  }

  updateSignIn(id,position,coursename,state){
    let url = this.hurl + '/shhTest/calltherollaction/updateCallTheRoll?calldate=1' + '&id=' + id + '&callposition=' + position
      + '&coursename=' + coursename + '&callstate=' + state + '&autoid=0';
    console.log(url);
    return this.http.get(url).map(res => res.json());
  }

  getQuestion(coursename,id){
    let url = this.hurl + '/shhTest/questionaction/getQuestionByCoursenameAndID?courseName=' + coursename + '&id=' + id;
    return this.http.get(url).map(res => res.json());
  }
}
