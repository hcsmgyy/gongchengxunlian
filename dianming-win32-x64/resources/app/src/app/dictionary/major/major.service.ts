import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class MajorService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  getAllMajor(){
    let url = this.hurl + '/shhTest/ddMajoraction/getAllDdMajor';
    return this.http.get(url).map(res => res.json());
  }
}
