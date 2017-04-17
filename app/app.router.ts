/**
 * Created by stan on 2017/3/10.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./home/detail/detail.component";
import { ListComponent } from "./home/list/list.component";
import { AuthComponent } from "./auth/auth.component";

import { AboutComponent } from "./about/about.component";
import { ErrorComponent } from "./error/error.component";

import { AppService } from './app.service';
import { AppStorage } from './app.storage';
import { AuthService } from './auth/auth.service';
import { HomeGuard } from './home/home.guard';
import { AppPipe } from './app.pipe';

const rootRouters:Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[ HomeGuard ],
    data:{ title:'首页' },
    // children:[
    //   {
    //     path:'',
    //     redirectTo:'/home/all',
    //     pathMatch:'full'
    //   },
    //   {
    //     path:'all',
    //     component:ListComponent,
    //     data:{ title:'首页' }
    //   },
    //   {
    //     path:":id",
    //     component:DetailComponent,
    //     data:{ title:'详情' }
    //   }
    // ]
  },
  {
    path:'detail',
    component:DetailComponent,
    canActivate:[ HomeGuard ],
    data:{ title:'详情'}
  },
  {
    path:"auth",
    component:AuthComponent,
    children:[
      {
        path:'login',
        loadChildren: 'app/auth/login/login.module#LoginModule',
        data:{ title:'登录' }
      },
      {
        path:'register',
        loadChildren: 'app/auth/register/register.module#RegisterModule',
        data:{ title:'注册' }
      },
      {
        path:'reset',
        loadChildren: 'app/auth/reset/reset.module#ResetModule',
        data:{ title:'重置密码' }
      }
    ]
  },
  {
    path:'about',
    component:AboutComponent,
    data:{ title:'关于' }
  },
  {
    path: '**',
    component: ErrorComponent,
    data:{title:"404"}
  }
];

@NgModule({
  imports:[
    FormsModule,
    CommonModule,
    RouterModule.forRoot(rootRouters)
  ],
  exports:[
    RouterModule,
    FormsModule,
    CommonModule
  ],
  declarations:[
    AppPipe,
    AuthComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    ErrorComponent,
    AboutComponent,
  ],
  providers:[
    AppService,
    AppStorage,
    AuthService,
    HomeGuard
  ]
})

export class AppRouter{}
