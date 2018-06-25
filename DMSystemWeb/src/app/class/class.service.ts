import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ClassService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  getAllClass(){
    let url = this.hurl + '/shhTest/courseaction/getAllCourseHql';
    return this.http.get(url).map(res => res.json());
  }

  getClassByName(name){
    let url = this.hurl + '/shhTest/courseaction/getCourseByNameHql?coursename=' +name;
    return this.http.get(url).map(res => res.json());
  }

  getAllDate(){
    let url = this.hurl + '/shhTest/ddClassDateaction/getAllDdClassDate';
    return this.http.get(url).map(res => res.json());
  }

  getDateByName(name){
    let url = this.hurl + '/shhTest/ddClassDateaction/getDdClassDateStateByName?dname='+name;
    return this.http.get(url).map(res => res.json());
  }

  createCourse(coursename,dailyweight,finalweight,picketline,classsession,classlocation,classdate,classorder,id,shape){
    let url =this.hurl + '/shhTest/courseaction/createCourse?coursename=' + coursename +'&dailweight=' +dailyweight +
    '&finalweight='+finalweight+'&picketline='+picketline+'&classsession='+classsession+'&classlocation='+classlocation+
    '&classdate='+classdate+'&classorder='+classorder+'&id='+id+'&shape='+shape;
    return this.http.get(url).map(res => res.json());
  }

  updateCourse(coursename,dailyweight,finalweight,picketline,classsession,classlocation,classdate,classorder,id,shape){
    let url =this.hurl + '/shhTest/courseaction/updateCourse?coursename=' + coursename +'&dailweight=' +dailyweight +
      '&finalweight='+finalweight+'&picketline='+picketline+'&classsession='+classsession+'&classlocation='+classlocation+
      '&classdate='+classdate+'&classorder='+classorder+'&id='+id+'&shape='+shape;
    return this.http.get(url).map(res => res.json());
  }

  deleteCourse(coursename){
    let url = this.hurl +'/shhTest/courseaction/deleteCourseByName?coursename='+coursename;
    return this.http.get(url).map(res => res.json());
  }
}
