import { Component, OnInit, HostBinding  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import * as jQuery from 'jquery';

import { AppService } from '../../app.service';
import { UserClass } from '../user.class';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ],
  animations:[ slideInDownAnimation ]
})
export class LoginComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  private submitted = false;
  private user:UserClass = {};
  private status = "登 录";
  private flag = false;
  private alerts: any = [];

  constructor(
    private activeRouter:ActivatedRoute,
    private appService:AppService,
    private af:AngularFire,
    private router:Router
  ) {}

  ngOnInit() {
    this.activeRouter.data.subscribe((params) => {
        this.appService.setCrumbs(params['title']);
    });
  }

  onSubmit() {
    this.submitted = true;
    this.status = "登录中...";
    this.flag = true;

    let email = this.user.email;
    let password = this.user.password;

    this.af.auth.login({email,password}, {
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    })
    .then(() => {
      this.alert("success",'登录成功！');
      this.router.navigate(['/home']);
    })
    .catch(e => {
      this.submitted = false;
      this.status = "登 录";
      this.flag = false;
      this.alert("danger",e);
    });
  }

  private alert(type:string,e): void {
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
}
