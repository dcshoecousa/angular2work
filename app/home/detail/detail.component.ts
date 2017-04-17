import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire } from "angularfire2";
import { AppService } from '../../app.service';
import { NewsClass } from '../news.class';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {
  private id;
  private type;
  private cover;
  private detail:NewsClass = {};

  constructor(
    private af:AngularFire,
    private appService:AppService,
    private activeRouter:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {

    this.id = this.activeRouter.snapshot.queryParams['id'] || false;
    this.type = this.activeRouter.snapshot.queryParams['type'] || false;

    if(this.id && this.type){
      const queryObservable = this.af.database.list('/'+this.type, {
        query: {
          orderByKey:this.id,
          equalTo:this.id
        }
      });

      queryObservable.subscribe(queriedItems => {
        this.detail.title = queriedItems[0].title;
        this.detail.author = queriedItems[0].author;
        this.detail.createDate = queriedItems[0].createDate;
        this.detail.read = queriedItems[0].read;
        this.detail.content = queriedItems[0].content;
      });

      this.cover = {
        "background":"url(https://dn-mhke0kuv.qbox.me/7c1d2e3ddcbfeccf3476.jpg?imageView2/1/w/800/h/600/q/85/format/jpg/interlace/1)",
        "background-size":"cover",
        "background-position":"50%"
      };

      this.activeRouter.data.subscribe((params) => {
        this.appService.setCrumbs(params['title']);
      });
    }else{
      this.router.navigate(['error']);
    }
  }
}
