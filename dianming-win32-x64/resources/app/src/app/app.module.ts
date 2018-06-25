import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { UserMangerComponent } from './user/user-manger/user-manger.component';
import {RouterModule, Routes} from "@angular/router";
import { ClassMangerComponent } from './class/class-manger/class-manger.component';
import { RoleMangerComponent } from './dictionary/role/role-manger/role-manger.component';
import { MajorMangerComponent } from './dictionary/major/major-manger/major-manger.component';
import { SignMangerComponent } from './dictionary/sign/sign-manger/sign-manger.component';
import { LessonMangerComponent } from './dictionary/lesson/lesson-manger/lesson-manger.component';
import { AboutComponent } from './about/about.component';
import { QuestionMangerComponent } from './question/question-manger/question-manger.component';
import { RollcallMangerComponent } from './rollcall/rollcall-manger/rollcall-manger.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import {UserService} from "./user/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { UserFilterPipe } from './user/user-filter.pipe';
import { UserCreatComponent } from './user/user-creat/user-creat.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {LoginService} from "./login/login.service";
import {HttpClientModule} from "@angular/common/http";
import { PageComponent } from './user/page/page.component';
import {ClassService} from "./class/class.service";
import {BootstrapModalModule} from "ngx-bootstrap-modal";
import { ConfirmComponent } from './confirm/confirm.component';
import { ClassFormComponent } from './class/class-form/class-form.component';
import { ClassCreatComponent } from './class/class-creat/class-creat.component';
import {RoleService} from "./dictionary/role/role.service";
import {MajorService} from "./dictionary/major/major.service";
import {LessonService} from "./dictionary/lesson/lesson.service";
import {SignService} from "./dictionary/sign/sign.service";
import {QuestionService} from "./question/question.service";
import {RollcallService} from "./rollcall/rollcall.service";
import { RollcallCreateComponent } from './rollcall/rollcall-create/rollcall-create.component';
import { RollcallFormComponent } from './rollcall/rollcall-form/rollcall-form.component';

const routeConfig: Routes = [
  {path: '', component: AppComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:WelcomeComponent,
    children:[
      {path:'user2',redirectTo:'user',pathMatch:'full'},
      {path: 'user', component: UserMangerComponent},
      {path: 'user-creat', component: UserCreatComponent},
      {path: 'user-form/:id', component: UserFormComponent},
      {path: 'classk', component: ClassMangerComponent},
      {path: 'classk-creat', component:ClassCreatComponent},
      {path: 'classk-form/:name',component:ClassFormComponent},
      {path: 'rollcall', component: RollcallMangerComponent},
      {path: 'rollcall-create', component:RollcallCreateComponent},
      {path: 'rollcall-form/:id',component:RollcallFormComponent},
      {path: 'question', component: QuestionMangerComponent},
      {path: 'about', component: AboutComponent},
      {path: 'role', component: RoleMangerComponent},
      {path: 'major', component: MajorMangerComponent},
      {path: 'lesson', component: LessonMangerComponent},
      {path: 'sign', component: SignMangerComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    UserMangerComponent,
    ClassMangerComponent,
    RoleMangerComponent,
    MajorMangerComponent,
    SignMangerComponent,
    LessonMangerComponent,
    AboutComponent,
    QuestionMangerComponent,
    RollcallMangerComponent,
    UserFormComponent,
    UserFilterPipe,
    UserCreatComponent,
    LoginComponent,
    WelcomeComponent,
    PageComponent,
    ConfirmComponent,
    ClassFormComponent,
    ClassCreatComponent,
    RollcallCreateComponent,
    RollcallFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    BootstrapModalModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [UserService,LoginService,ClassService,RoleService,MajorService,LessonService,SignService,
                QuestionService,RollcallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
