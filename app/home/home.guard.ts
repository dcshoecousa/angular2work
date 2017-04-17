/**
 * Created by stan on 2017/4/10.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class HomeGuard implements CanActivate{
  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(this.authService.hasRole()){
        return true;
      }
      if(!this.authService.isLogin()) {
        alert('你还未登录！！！');
        this.router.navigate(['/auth/login']);
        return false;
      }
      return true;
  }
}
