import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import{GlobalStorageProvider} from "../../providers/global-storage/global-storage"
/**
 * Generated class for the CountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-count',
  templateUrl: 'count.html',
})
export class CountPage {
  due:boolean;
  due2:boolean;
  judge1:boolean;
  judge2:boolean;
  coursename: string;
  result:any;
  // 本地数据
  length:any;
  ID=[];
  qiandao=[];
  kuangke=[];
  chidao=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public CallData: RedditDataProvider,public globalStorage:GlobalStorageProvider,public toastCtrl:ToastController) {


    this.globalStorage.getStorage('coursename').then((res) => {
      this.coursename = res;
      console.log(this.coursename);
    });
  }
  judge11(){this.judge1=true;this.judge2=false;}
  judge22(){this.judge2=true;this.judge1=false;}

  find() {
    this.due=true;
    this.due2=false;
    this.CallData.countAllCallTheRoll(this.coursename).subscribe(
      result => {
        this.result=result.counts;
        this.length=result.counts.length;
        if(result.counts != null){
          console.log(result);
          console.log(result.counts.length);
          console.log(result.counts[0][0]);
          //     for(var h:)
          for(var i=0;i<result.counts.length;i++){
            for(var k in result.counts[i]) {
              console.log('key is ' + k);
              this.ID[i]=k;
              var j=0;
              for(var k2 in result.counts[i][k]) {
                console.log('key is ' + k2);
                console.log('value is' + result.counts[i][k][k2]);
                if(j==0){this.qiandao[i]=result.counts[i][k][k2];}
                if(j==2){this.kuangke[i]=result.counts[i][k][k2];}
                if(j==3){this.chidao[i]=result.counts[i][k][k2];}
                j++;
              }
            }
          }
          console.log(this.ID);
        }
        else{

          this.length=1;
          this.qiandao[0]="无";
          this.kuangke[0]="无";
          this.chidao[0]="无";
        }

      }
    );
  }

}
