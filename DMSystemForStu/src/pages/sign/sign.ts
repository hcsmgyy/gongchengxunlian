import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";

/**
 * Generated class for the SignPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {


  course:any;
  homeItem: any;
  site: string[];
  row: any;
  col: any;
  rows: number[];
  cols: number[];

  pai: string;
  lie: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController,public globalStorage:GlobalStorageProvider,
               public redditService: RedditDataProvider) {
    this.homeItem = navParams.get('item');
    this.course = this.homeItem.cnameAndID.courseName;
    console.log(this.homeItem.cnameAndID.courseName);
    redditService.getCourseByName(this.homeItem.cnameAndID.courseName).subscribe(result => {
      this.site = result.course.shape.split('*');
      this.row = this.site[0];
      this.col = this.site[1];
      this.cols = [];
      this.rows = [];
      for (let i = 1; i <= this.col; i++) {
        this.cols.push(i);
      }
      for (let i = 1; i <= this.row; i++) {
        this.rows.push(i);
      }
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  qiandao(){
    let loading = this.loadingCtrl.create({
      duration: 1000
    });

    let position = this.pai + '*' +this.lie;

    this.globalStorage.getStorage('stuId').then(res=>{
      this.redditService.updateSignIn(res, position, this.course, 1).subscribe(r => {
        console.log(r.state);
        if(r.state == '1') {
          let toast = this.toastCtrl.create({
            message: '签到成功',
            duration: 1000,
            position: 'bottom',
          });
          toast.present();
          loading.present();
        }
        else {
          let toast = this.toastCtrl.create({
            message: r.state,
            duration: 1000,
            position: 'middle',
          });
          toast.present();
          loading.present();
        }
      });
    });
  }
}
