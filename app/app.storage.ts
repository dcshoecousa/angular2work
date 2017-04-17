/**
 * Created by stan on 2017/4/11.
 */
export class AppStorage {

  public localStorage:any;
  public sessionStorage:any;

  constructor() {
    if (!localStorage&&!sessionStorage) {
      throw new Error('Current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
    this.sessionStorage = sessionStorage;
  }

  public setLocal(key:string, value:string):void {
  this.localStorage[key] = value;
}

  public getLocal(key:string):string {
    return this.localStorage[key] || false;
  }

  public setLocalObject(key:string, value:any):void {
    this.localStorage[key] = JSON.stringify(value);
  }

  public getLocalObject(key:string):any {
    return JSON.parse(this.localStorage[key] || '{}');
  }

  public removeLocal(key:string):any {
    this.localStorage.removeItem(key);
  }

  public setSession(key:string, value:string):void {
    this.sessionStorage[key] = value;
  }

  public getSession(key:string):string {
    return this.sessionStorage[key] || false;
  }

  public setSessionObject(key:string, value:any):void {
    this.sessionStorage[key] = JSON.stringify(value);
  }

  public getSessionObject(key:string):any {
    return JSON.parse(this.sessionStorage[key] || '{}');
  }

  public removeSession(key:string):any {
    this.sessionStorage.removeItem(key);
  }
}
