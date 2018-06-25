import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class QuestionService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  getAllQuestion(){
    let url = this.hurl + '/shhTest/questionaction/getAllQuestion';
    return this.http.get(url).map(res => res.json());
  }
}
