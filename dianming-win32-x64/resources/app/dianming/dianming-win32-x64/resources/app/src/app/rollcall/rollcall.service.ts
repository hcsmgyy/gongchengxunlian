import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class RollcallService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  getAllRollcall(){
    let url = this.hurl + '/shhTest/calltherollaction/getAllCallTheRollHql';
    return this.http.get(url).map(res => res.json());
  }

  getAllState(){
    let url = this.hurl + '/shhTest/ddStateaction/getAllDdState';
    return this.http.get(url).map(res => res.json());
  }

  createRollcall(coursename,callstate,calldate,callposition,id){
    let url = this.hurl + '/shhTest/calltherollaction/createCallTheRoll?coursename='+coursename+'&callstate='+callstate+'&calldate='+calldate+'&id='+id+'&callposition='+callposition;
    return this.http.get(url).map(res => res.json());
  }

  getRollById(id){
    let url = this.hurl + '/shhTest/calltherollaction/getCallTheRollByID?id='+id;
    return this.http.get(url).map(res => res.json());
  }

  deleteRollById(id){
    let url = this.hurl + '/shhTest/calltherollaction/deleteCallTheRollByID?id='+id;
    return this.http.get(url).map(res => res.json());
  }
}
