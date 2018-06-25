import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {RedditDataProvider} from "../../providers/reddit-data/reddit-data";
import {GlobalStorageProvider} from "../../providers/global-storage/global-storage";
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {SignPage} from "../sign/sign";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: any;
  id: any;

  courses: any;

  constructor(public toastCtrl: ToastController, private stuData: RedditDataProvider, private globalStorage: GlobalStorageProvider, public navCtrl: NavController) {
    globalStorage.getStorage('stuId').then((res) => {
      // this.stuInf = res;
      console.log(res);
      stuData.getPersonById(res).subscribe(
        result => {
          this.name = result.personnel.Pname;
          this.id = result.personnel.ID;
          console.log('home page 1' + result.personnel.Pname);
        }
      );

      stuData.getCourseById(res).subscribe(
        result=>{
          this.courses = result.marks;

          for (let item of this.courses) {
            stuData.countCallTheRoll(res, 3, item.cnameAndID.courseName).subscribe(r2 => {
              // this.record.push({c:item,k: r2.countnum});
              stuData.getCourseByName(item).subscribe(r3 => {
                console.log('home page r3 ' + r2.countnum);
                if (parseInt(r2.countnum) >= 2) {
                  console.log('home page r2 ' + r2.countnum);
                  let toast = this.toastCtrl.create({
                    message: '课程：'+item.cnameAndID.courseName + '已旷课'+ r2.countnum +'次，快超过该课程最大旷课数',
                    duration: 10000,
                    position: 'middle',
                    showCloseButton: true,
                    closeButtonText: 'OK'
                  });
                  toast.present();
                }
              });
            });
          }
        }
      );
    });
  }

  courseSelected(event, course) {
    this.navCtrl.push(SignPage, {
      item: course
    })
  }
}
