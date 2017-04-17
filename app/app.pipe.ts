import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class AppPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let nowStamp = Math.round((new Date()).valueOf()/1000);
    let ret = nowStamp - value;

    if(value == null){
      return ''
    }

    if(ret < 10 ){
      return "刚刚";
    }else if(ret < 3600){
      return Math.floor(ret / 60) + "分钟前";
    }else if(ret < 24 * 3600){
      return Math.floor(ret / 3600) + "小时前";
    }else if(ret < 24 * 3600 *30){
      return Math.floor(ret / 24 / 3600) + "天前";
    }else{
      let date = new Date(parseInt(value) * 1000);
      return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    }


  }
}
