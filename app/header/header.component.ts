import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire } from 'angularfire2';
import * as jQuery from 'jquery';

import { AppService } from '../app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host:{
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent implements OnInit {

  private title:string;
  private mask:boolean;
  private isLogin:boolean;

  constructor(
    private af:AngularFire,
    private appService:AppService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.mask = this.appService.getShow();
    this.title = this.appService.getCrumbs();
    this.isLogin = this.authService.isLogin();
  }

  openNav():void{
    this.appService.setShow(true);
    jQuery(".container-nav").addClass('move');
  }

  closeNav():void{
    this.appService.setShow(false);
    jQuery(".container-nav").removeClass('move');
  }

  logout():void{
    this.af.auth.logout();
    this.router.navigate(['/auth/login']);
  }

  onResize(event) {
    if(event.target.innerWidth>768){
      this.appService.setShow(false);
      jQuery(".container-nav").removeClass('move');
    }
  }
}
