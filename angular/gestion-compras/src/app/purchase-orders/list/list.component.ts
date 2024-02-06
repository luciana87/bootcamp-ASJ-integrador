import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ItemDetailDTO } from 'src/app/models/itemDetailDTO';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() datoEnviado: ItemDetailDTO[] = [];

  // orderList: PurchaseOrder[] = this.datoEnviado;
  constructor(public service: PurchaseOrderServiceService){
    console.log("Esto es el dato enviado");
    
    console.log(this.datoEnviado);
    // this.orderList = this.service.getPurchaseOrders();
    
  }

}
