import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {firebaseConfig, authConfig} from "../environments/firebase.config";
import {AngularFireModule} from "angularfire2/index";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { HomeComponent } from './home/home.component';
import {LessonsService} from "./shared/model/lessons.service";

import {RouterModule} from "@angular/router";
import {routerConfig} from "./router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import {CoursesService} from "./shared/model/courses.service";

import { SafeUrlPipe } from './shared/security/safe-url.pipe';
import {ReactiveFormsModule} from "@angular/forms";

import { LessonFormComponent } from './lesson-form/lesson-form.component';
import { EditLessonComponent } from './edit-lesson/edit-lesson.component';
import {LessonResolver} from "./shared/model/lesson.resolver";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from "./shared/security/auth.service";
import {AuthGuard} from "./shared/security/auth.guard";
import {HttpModule} from "@angular/http";
import { SongsComponent } from './songs/songs.component';
import { ServicesComponent } from './services/services.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { NewSongComponent } from './new-song/new-song.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    SafeUrlPipe,
    LessonFormComponent,
    EditLessonComponent,
    LoginComponent,
    RegisterComponent,
    SongsComponent,
    ServicesComponent,
    NewServiceComponent,
    NewSongComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(firebaseConfig, authConfig),
      RouterModule.forRoot(routerConfig),
      ReactiveFormsModule,
      HttpModule
  ],
  providers: [LessonsService, CoursesService, LessonResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


