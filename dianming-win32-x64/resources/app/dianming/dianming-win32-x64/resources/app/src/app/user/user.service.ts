import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class UserService {

  hurl = 'http://172.17.175.124:8080';
  constructor(public http:Http) { }

  private users:any;

  getAllUser(){
    let url = this.hurl + '/shhTest/personnelaction/getAllPersonnelHql';
    return this.http.get(url).map(res => res.json());
  }

  getAllRole(){
    let url = this.hurl + '/shhTest/ddRoleaction/getAllDdRole';
    return this.http.get(url).map(res => res.json());
  }

  getAllMajor(){
    let url = this.hurl + '/shhTest/ddMajoraction/getAllDdMajor';
    return this.http.get(url).map(res => res.json());
  }

  getMajorByName(name){
    let url = this.hurl + '/shhTest/ddMajoraction/getDdMajorStateByName?dname=' + name;
    return this.http.get(url).map(res => res.json());
  }

  getRoleByName(name){
    let url = this.hurl + '/shhTest/ddRoleaction/getDdRoleStateByName?dname=' + name;
    return this.http.get(url).map(res => res.json());
  }

  getPersonById(id){
    let url = this.hurl + '/shhTest/personnelaction/getPersonnelByIDHql?id=' + id;
    return this.http.get(url).map(res => res.json());
  }

  deletePersonById(id){
    let url = this.hurl + '/shhTest/personnelaction/deletePersonnelByID?id=' + id;
    return this.http.get(url).map(res => res.json());
  }

  createPerson(id,name,pwd,major,classid,role){
    let url = this.hurl + '/shhTest/personnelaction/createPersonnel?id=' +id +'&password='+pwd +
      '&pname='+name +'&major='+major+'&pclass='+classid+'&role='+role;
    return this.http.get(url).map(res=>res.json());
  }

  updatePerson(id,name,pwd,major,classid,role){
    let url = this.hurl + '/shhTest/personnelaction/updatePersonnel?id=' +id +'&password='+pwd +
      '&pname='+name +'&major='+major+'&pclass='+classid+'&role='+role;
    return this.http.get(url).map(res=>res.json());
  }
}

export class User{
  constructor(
    public ID: any,
    public Pname: any,
    public Ppassword: any,
    public pclass: any,
    public major: any,
    public role: any){
  }
}
