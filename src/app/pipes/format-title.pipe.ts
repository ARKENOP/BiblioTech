import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})
export class FormatTitlePipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/_/g, ' ');
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
