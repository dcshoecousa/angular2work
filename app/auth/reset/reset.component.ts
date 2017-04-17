import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../app.service';
import { slideInDownAnimation } from '../../animations';

import * as jQuery from "jquery";

@Component({
  selector: 'app-reset',
  templateUrl: 'reset.component.html',
  styleUrls: ['reset.component.css'] ,
  animations: [ slideInDownAnimation ]
})
export class ResetComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'relative';

  submitted = false;
  user = { email:'' };
  constructor(
    private appService:AppService,
    private activeRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRouter.data.subscribe((params) => {
      this.appService.setCrumbs(params['title']);
    });
  }
  onFocus(e):void{
    jQuery(e.target).prev().addClass('enter');
  }
  onBlur(e):void{
    let val:any = jQuery(e.target).val();
    if(!val){
      jQuery(e.target).prev().removeClass('enter');
    }
  }
  onSubmit(val:any){
    this.submitted = true;
    console.log(val);
  }
}
