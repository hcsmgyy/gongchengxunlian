import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RedditDataProvider} from "../providers/reddit-data/reddit-data";


import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {HomePage} from "../pages/home/home";
import {PositionPage} from "../pages/position/position";
import {CoursePage} from "../pages/course/course";
import {MarkPage} from "../pages/mark/mark";
import {HistoryPage} from "../pages/history/history";
import {PersonPage} from "../pages/person/person";
import {ClassPage} from "../pages/class/class";
import {CountPage} from "../pages/count/count";
import {GlobalStorageProvider} from "../providers/global-storage/global-storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //rootPage:any = HomePage;
  rootPage:any = LoginPage;
  stuInf:any;
  currentUser = {
    name:'',
    id:''
  };
  pages: Array<{title: string, component: any}>;

  constructor(public personData: RedditDataProvider,public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen,public globalStorage:GlobalStorageProvider) {
    this.initializeApp();
    this.globalStorage.getStorage('stuId').then((res) => {
      this.stuInf = res;
      // console.log(this.stuInf);
      if(this.stuInf != null){
        this.personData.getPersonById(this.stuInf).subscribe(result=>{
          console.log(result.personnel);
          this.currentUser.name = result.personnel.Pname;
          console.log(this.currentUser.name);
          this.currentUser.id = result.personnel.ID;
        });
        this.rootPage = HomePage;
        // this.rootPage = PositionPage;
      }
      else {
        this.rootPage = LoginPage;
      }
    });

    this.pages = [
      {title: '首页-我的课程', component: HomePage},
      {title:'签到设置',component:PositionPage},
      {title:'课程设置',component:CoursePage},
      {title:'成绩设置',component:MarkPage},
      {title:'考勤历史', component: HistoryPage},
      {title:'人员信息',component:PersonPage},
      {title:'班级信息',component:ClassPage},
      {title:'考勤统计',component:CountPage},
      {title: '登出', component:LoginPage}
    ];

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
