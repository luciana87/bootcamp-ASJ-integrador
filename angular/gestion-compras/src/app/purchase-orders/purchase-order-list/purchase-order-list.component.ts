import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css']
})
export class PurchaseOrderListComponent implements OnInit{

  orderList: PurchaseOrder[] = [];
  
  constructor(public service: PurchaseOrderServiceService) {}

  ngOnInit(): void {
    this.orderList = this.service.getPurchaseOrders();
  }

  delete(order: PurchaseOrder){
    this.service.deleteOrder(order);
    this.orderList = this.service.getPurchaseOrders();

  }
}
