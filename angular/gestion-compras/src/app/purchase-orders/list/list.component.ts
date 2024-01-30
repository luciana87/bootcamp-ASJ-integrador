import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ItemDetail } from 'src/app/models/itemDetail';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() datoEnviado: ItemDetail[] = [];

  // orderList: PurchaseOrder[] = this.datoEnviado;
  constructor(public service: PurchaseOrderServiceService){
    console.log("Esto es el dato enviado");
    
    console.log(this.datoEnviado);
    // this.orderList = this.service.getPurchaseOrders();
    
  }

}
