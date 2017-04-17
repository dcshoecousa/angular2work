import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

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
