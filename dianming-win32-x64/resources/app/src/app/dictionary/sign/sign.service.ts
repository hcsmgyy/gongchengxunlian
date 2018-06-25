import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class SignService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  getAllState(){
    let url = this.hurl + '/shhTest/ddStateaction/getAllDdState';
    return this.http.get(url).map(res => res.json());
  }
}
