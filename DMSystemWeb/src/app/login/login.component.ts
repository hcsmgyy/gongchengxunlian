import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    name: '',
    pwd: ''
  };

  isPass = '';
  constructor(public router:Router,public service:LoginService) {

  }

  ngOnInit() {
  }

  login(){
    this.service.postLogin(this.user.name, this.user.pwd).subscribe(
      result => {

        console.log(result.state);
        this.isPass = result.state ;

        if (this.isPass == '1') {
          console.log('setRoot stage');
          // this.router.navigateByUrl('home');
          this.router.navigate(['home']);
        }
        else if (this.isPass == '0') {
        }
        else {
        }
        console.log("Success : " + this.isPass);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        console.log('postLogin completed');
      }
    );


    console.log(this.user);
  }
}
