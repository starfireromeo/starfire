

import {Route} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SongsComponent } from './songs/songs.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { NewSongComponent } from './new-song/new-song.component';
import { AuthGuard  } from './shared/security/auth.guard';




export const routerConfig : Route[] = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'services',
        canActivate: [AuthGuard],
        children: [
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        component: ServicesComponent
                    },
                    {
                        path: 'new',
                        component: NewServiceComponent
                    },
                    {
                        path: 'edit',
                        component:  ServicesComponent,
                    }
                ]
            },
            {
                path: '',
                component: ServicesComponent
            }
        ]
    },
    {
      path: 'songs',
      children: [
          {
                path: ':id',
                children: [
                    {
                        path: '',
                        component: ServicesComponent
                    },
                    {
                        path: 'new',
                        component: NewServiceComponent
                    },
                    {
                        path: 'edit',
                        component:  SongsComponent,
                    }
                ]
              
 //             resolve: {
 //               lesson: LessonResolver
 //             }
          },
          {
              path: '',
              component: SongsComponent,
//              canActivate: [AuthGuard]
          }
      ]
    },
    {
        'path': 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];





