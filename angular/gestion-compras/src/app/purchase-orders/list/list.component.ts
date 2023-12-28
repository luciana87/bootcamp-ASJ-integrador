import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ItemPurchaseOrder } from 'src/app/models/itemPurchaseOrder';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() datoEnviado: ItemPurchaseOrder[] = [];

  // orderList: PurchaseOrder[] = this.datoEnviado;
  constructor(public service: PurchaseOrderServiceService){
    console.log("Esto es el dato enviado");
    
    console.log(this.datoEnviado);
    // this.orderList = this.service.getPurchaseOrders();
    
  }

}
