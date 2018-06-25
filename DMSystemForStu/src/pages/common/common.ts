import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";

/**
 * Generated class for the CommonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-common',
  templateUrl: 'common.html',
})
export class CommonPage {

  questions:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public redditData: RedditDataProvider, public globalStorage: GlobalStorageProvider) {
    this.questions = [];
    globalStorage.getStorage('stuId').then(res => {
      redditData.getQuestion('电子技术', res).subscribe(result => {
        this.questions = result.questions;
        // console.log('normal page ' + result.questions[0].score);
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommonPage');
  }

  out(){

  }

}
