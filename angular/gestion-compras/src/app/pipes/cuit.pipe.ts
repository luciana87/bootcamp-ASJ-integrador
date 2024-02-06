import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuit'
})
export class CuitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
