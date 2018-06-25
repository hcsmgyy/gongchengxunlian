import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,App,LoadingController,ToastController } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import{GlobalStorageProvider} from "../../providers/global-storage/global-storage"
import {HomePage} from "../home/home";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user ={
    name:'',
    pwd:''
  };
  isPass ='';
  stuInf:any;

  public loginForm: any;
  public backgroundImage = "assets/imgs/background/5.jpg";

  constructor(private globalStorage: GlobalStorageProvider,public navCtrl: NavController, public navParams: NavParams,public  loginData:RedditDataProvider,
              public toastCtrl:ToastController,public loadingCtrl:LoadingController,public alertCtrl:AlertController,
              public app:App) {
  }

  login(){
    let loading = this.loadingCtrl.create({
      duration: 1000
    });

    this.globalStorage.setStorage('stuId', this.user.name);

    this.loginData.postLogin(this.user.name, this.user.pwd).subscribe(
      result => {
        //console.log(result.state);
        this.isPass = result.state;

        if (this.isPass == '1') {
          console.log('setRoot stage');
          loading.present();
          this.navCtrl.setRoot(HomePage);
        }
        else if (this.isPass == '0') {
          let toast = this.toastCtrl.create({
            message: '工号不存在，请确认输入',
            duration: 2000,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'OK'
          });
          toast.present();
        }
        else {
          let toast = this.toastCtrl.create({
            message: '密码错误，请重输',
            duration: 2000,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'OK'
          });
          toast.present();
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
  getID() {
    return this.user.name;
  }
}
