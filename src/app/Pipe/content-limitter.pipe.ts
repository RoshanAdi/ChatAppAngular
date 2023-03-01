import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimitter',
})
export class ContentLimitterPipe implements PipeTransform {
  transform(value: any): any {
    if(value){
    if (value.length > 7) {
      return value.substring(0, 6) + '...';
    }
    return value;
  }}
}
