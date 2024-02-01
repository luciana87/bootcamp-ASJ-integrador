import { Pipe, PipeTransform } from '@angular/core';
import { PurchaseOrder } from '../models/purchaseOrder';
import { PurchaseOrderResponseDTO } from '../models/purchaseOrderResponseDTO';

@Pipe({
  name: 'activeOrder'
})
export class ActiveOrderPipe implements PipeTransform {

  transform(orderList: PurchaseOrderResponseDTO[]): PurchaseOrderResponseDTO[] {
    if (!orderList) {
      return [];
    }
    return orderList.filter(order => !order.canceled);
  }

}
