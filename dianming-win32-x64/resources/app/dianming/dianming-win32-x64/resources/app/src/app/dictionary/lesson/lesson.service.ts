import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class LessonService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  getAllLesson(){
    let url = this.hurl + '/shhTest/ddClassDateaction/getAllDdClassDate';
    return this.http.get(url).map(res => res.json());
  }
}
