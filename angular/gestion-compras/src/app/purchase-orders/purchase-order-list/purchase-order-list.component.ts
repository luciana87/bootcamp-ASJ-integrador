import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css'],
  providers: [PurchaseOrderServiceService] 
})
export class PurchaseOrderListComponent implements OnInit {

  orderList: PurchaseOrder[] = [];

  constructor(public service: PurchaseOrderServiceService) { }

  ngOnInit(): void {
    // this.orderList = this.service.getPurchaseOrders();
  }

  delete(order: PurchaseOrder) {
    //   let confirmacion = confirm(`¿Desea cancelar la orden de compra #${order.num_order}?`);
    //   if (confirmacion) {
    //     this.service.deleteOrder(order);
    //     this.orderList = this.service.getPurchaseOrders();

    //   }
  }
}
