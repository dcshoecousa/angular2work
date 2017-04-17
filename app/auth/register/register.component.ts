import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';
import * as jQuery from 'jquery';

import { AppService } from '../../app.service';
import { UserClass } from '../user.class'
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'] ,
  animations:[ slideInDownAnimation ]
})
export class RegisterComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  private alerts:any = [];
  private flag = false;
  private status = "注 册";
  private submitted = false;
  private user:UserClass = {};

  constructor(
    private af:AngularFire,
    private appService:AppService,
    private activeRouter:ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRouter.data.subscribe((params) => {
      this.appService.setCrumbs(params['title']);
    });
  }
  onSubmit() {
    this.flag = true;
    this.status = "注册中...";
    this.submitted = true;

    let email:string = this.user.email;
    let password:string = this.user.password;

    this.af.auth.createUser({ email, password })
      .then((user) => console.log(`Create User Success:`, user))
      .catch(e => {
        this.submitted = false;
        this.flag = false;
        this.status = "注 册";
        this.alert(e);
      });
  }

  public alert(e): void {
    this.alerts.push({
      type: 'danger',
      msg: e,
      timeout: 5000
    });
  }

  public onFocus(e):void{
    jQuery(e.target).prev().addClass('enter');
  }

  public onBlur(e):void{
    let val:any = jQuery(e.target).val();
    if(!val){
      jQuery(e.target).prev().removeClass('enter');
    }
  }

  public enter():void{
    if(this.user.password !== this.user.rePassword)
    {
      this.flag = true;
    }else{
      this.flag = false;
    }
  }
}
