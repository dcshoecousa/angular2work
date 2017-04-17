import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFire, FirebaseListObservable } from "angularfire2";


import * as jQuery from 'jquery';
import { AppService } from '../../app.service';
import { NewsClass } from '../news.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  host:{
    '(window:scroll)': 'onScroll()',
  }
})
export class ListComponent implements OnInit, OnChanges {

  @Input() type:string;

  private loading:boolean = false;
  private empty:boolean = false;
  private list:FirebaseListObservable<any[]>;
  private newNew:NewsClass = {};
  private tag:string;

  constructor(
    private af:AngularFire,
    private appService:AppService,
    private activeRouter:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    this.activeRouter.data.subscribe((params) => {
      this.appService.setCrumbs(params['title']);
    });
    //this.getDataOriginal("news");
  }

  ngOnChanges(changes: SimpleChanges):void{
      this.tag = changes['type'].currentValue == "all" ? "news":changes['type'].currentValue;
      this.loading = false;
      this.list = null;
      this.empty = false;
      this.getDataOriginal(this.tag);
  }

  getDataOriginal(val:string):void{
    this.list = this.af.database.list(val,{
      query: {
        limitToFirst: 5,
      }
    });
    this.list.subscribe((params)=>{
      this.loading = true;
      if(params.length > 0){
        this.onScroll();
      }else{
        this.empty = true;
      }
    });
  }

  detail(val:string):void{
    this.router.navigate(['/detail'],{ queryParams: { type: this.tag, id:val } })
  }

  onScroll():void{
    let contHeight = jQuery(window).outerHeight();
    let winTop = jQuery(window).scrollTop();
    jQuery.each(jQuery("[data-lazy]"),function () {
      let _this = jQuery(this);
      if(_this.offset().top - (winTop + contHeight) < 0){
        _this.attr('src',_this.attr("data-url"));
      }
    });
  }

  ngAfterViewChecked():void{
    this.onScroll();
  }

  add():void{
    const productObservable = this.af.database.list("news");
    // let news = this.news.title && this.news.desc ? this.news : "没有值";
    let newNew = this.newNew;
    productObservable.push({
      title:newNew.title,
      desc:newNew.desc,
      author:newNew.author,
      content:newNew.content,
      read:newNew.read,
      like:newNew.like,
      createDate:'20170408'
    });
  }

  deleteProduct():void{
    const productObservable = this.af.database.list("news");
    productObservable.remove("-Kfuuluv8p92DR8a35mp")
      .then(()=>{
        console.log("删除成功！");
      })
      .catch(()=>{
        console.log("删除失败！");
      });
  }
}
