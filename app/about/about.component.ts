import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private appService:AppService,
    private activeRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRouter.data.subscribe((params) => {
      this.appService.setCrumbs(params['title']);
    });
  }

}
