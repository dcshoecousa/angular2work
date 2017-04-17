import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as jQuery from 'jquery';
import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  private isLogin:boolean = false;
  private isAdmin:boolean = false;

  constructor(
    private router:Router,
    private appService:AppService,
    private authService:AuthService
  ) { }

  ngOnInit() {

  }

  ngDoCheck(){
    this.isLogin = this.authService.isLogin();
    this.isAdmin = this.authService.hasRole();
  }

  link(url:string):void{
    this.router.navigate(['/'+url]);
    this.appService.setShow(false);
    jQuery(".container-nav").removeClass('move');
  }
}
