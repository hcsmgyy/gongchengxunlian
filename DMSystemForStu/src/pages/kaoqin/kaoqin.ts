import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";

/**
 * Generated class for the KaoqinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-kaoqin',
  templateUrl: 'kaoqin.html',
})
export class KaoqinPage {

  id:any;
  courses:any;
  record:Array<{c:string, k:string, l:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams,public redditData: RedditDataProvider, public globalStorage: GlobalStorageProvider) {
    globalStorage.getStorage('stuId').then(res => {
      this.id = res;
      console.log('kq page ' + this.id);
      this.redditData.getCourseById(res).subscribe(
        result => {
          this.courses = result.marks;
          this.record = [];
          for(let item of this.courses) {
            this.redditData.countCallTheRoll(this.id, 2, item.cnameAndID.courseName).subscribe(r1 => {
              this.redditData.countCallTheRoll(this.id, 3, item.cnameAndID.courseName).subscribe(r2 => {
                this.redditData.countCallTheRoll(this.id, 4, item.cnameAndID.courseName).subscribe(r3 => {
                  this.record.push({c: item, k: r2.countnum, l:r3.countnum});
                });
              });
            });

          }
          console.log('kq page 2' + result.marks[0].cnameAndID.courseName);
        }
      );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KaoqinPage');
  }

}
