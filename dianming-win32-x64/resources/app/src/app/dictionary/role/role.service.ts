import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class RoleService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  getAllRole(){
    let url = this.hurl + '/shhTest/ddRoleaction/getAllDdRole';
    return this.http.get(url).map(res => res.json());
  }

}
