import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    value = value.replace(/([a-z])([A-Z])/g, '$1 $2');
    value = value.replace(/_/g, ' ');
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

}
