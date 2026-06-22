import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  private DatePipe = new DatePipe('en-US')

  transform(value: any, ...args: any[]): any {
    // if(value =='' || value == null || value == undefined){
    //   return 'NA';
    // }else{
    //       return value ? '+91 ' + value : value;
    // }

    // return value ? '+91 ' + value : value;

    return this.DatePipe.transform(value,'MMM/YYYY');
  }

}
