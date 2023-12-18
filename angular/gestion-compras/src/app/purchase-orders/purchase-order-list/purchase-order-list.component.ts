import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css']
})
export class PurchaseOrderListComponent {

  orderList: { id: number, order_num: number, issue_date: Date, deadline: Date, 
    information: String,product_sku: number, supplier_id: number, count: number, total: number }[] = [];


}
