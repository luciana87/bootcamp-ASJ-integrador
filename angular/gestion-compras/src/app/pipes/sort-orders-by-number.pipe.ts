import { Pipe, PipeTransform } from '@angular/core';
import { PurchaseOrder } from '../models/purchaseOrder';
import { PurchaseOrderResponseDTO } from '../models/purchaseOrderResponseDTO';

@Pipe({
  name: 'sortOrdersByNumber'
})
export class SortOrdersByNumberPipe implements PipeTransform {

  transform(orders: PurchaseOrderResponseDTO[]): PurchaseOrderResponseDTO[] {
    orders.sort((orderA: PurchaseOrderResponseDTO, orderB: PurchaseOrderResponseDTO) => {
      if (orderA.num_order < orderB.num_order) {
        return -1;
      }
      return (orderA.num_order > orderB.num_order) ? 1 : 0;
    });
    return orders;  
  }

}
