import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private type:string;
  constructor(
    private appService:AppService
  ) { }

  ngOnInit() {
    this.type = "all";
  }

  public queryType(event,val:string){
    let _this = jQuery(event.target);
    _this.parents('ul').find('a').removeClass('active');
    _this.addClass('active');
    this.appService.setCrumbs(val);
    this.type = val;
  }
}
