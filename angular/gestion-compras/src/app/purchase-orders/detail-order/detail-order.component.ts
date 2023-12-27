import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';
import { OrderUtils } from 'src/app/utils/order';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {

  order!: PurchaseOrder;

  constructor(public service: PurchaseOrderServiceService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      const id = param.get('id');



      if (id) {
        this.order = this.service.getOrderById(parseInt(id)) || OrderUtils.initializeOrder(); // || si mandan un id que no se encuentra lo inicializo
        console.log("Estoy aca");
        
        console.log(this.order);

      }

    });
  }

  goBack() {
    this.router.navigate(['/purchase-order-list']);
    }


}
