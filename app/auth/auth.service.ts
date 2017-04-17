/**
 * Created by stan on 2017/4/10.
 */
import { Injectable } from '@angular/core';
import { AppStorage } from '../app.storage';

@Injectable()
export class AuthService{

  constructor(
    private appStorage:AppStorage
  ){}

  isLogin():boolean{
    let _token = this.appStorage.getLocal('firebase:authUser:AIzaSyA97NvLRoA0LFfYALoZRjBX98qv0qP-Z-c:[DEFAULT]');
    if(_token){
      return true;
    }
    return false;
  }

  hasRole():boolean{
     let _role = this.appStorage.getSession('_role');
     if(_role){
       return true;
     }
     return false;
  }
}
