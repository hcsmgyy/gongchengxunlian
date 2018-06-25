import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  postLogin(id, password){
    let url =this.hurl + '/shhTest/personnelaction/CheckPersonnel?id=' + id + '&password=' + password;
    return this.http.get(url).map(res => res.json());
  }

  // getUserById(id:string):User{
  //   return this.users.find(user => user.cardId == id)
  // }
}

export class user{
  constructor(
    public cardId: string,
    public name: string,
    ){
  }

}
