import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(value: boolean): String {
    return value ? 'Cancelada' : 'Activa';
  }

}
