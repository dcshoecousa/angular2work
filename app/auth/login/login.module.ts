/**
 * Created by stan on 2017/3/19.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forChild(
      [{ path:'', component:LoginComponent}]
    )
  ],
  declarations:[
    LoginComponent,

  ]
})

export class LoginModule{}
