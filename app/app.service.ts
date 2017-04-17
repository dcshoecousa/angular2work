/**
 * Created by stan on 2017/4/5.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  public breadCrumbs:string = " ";
  public showNav:boolean = false;

  setCrumbs(val:string):void{
    this.breadCrumbs = val;
  }

  getCrumbs():string{
    return this.breadCrumbs;
  }

  setShow(val:boolean):void{
    this.showNav = val;
  }

  getShow():boolean{
    return this.showNav;
  }

}
