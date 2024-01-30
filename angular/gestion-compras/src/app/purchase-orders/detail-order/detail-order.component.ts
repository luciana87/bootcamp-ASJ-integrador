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

  order: PurchaseOrder = OrderUtils.initializeOrder();
  id: number = -1;
  constructor(public serviceOrder: PurchaseOrderServiceService,
              private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      this.id = param.get('id');
      console.log(this.id);      
      });

    this.serviceOrder.getOrderById(this.id).subscribe(
      (data) => {
        this.order = data;
        console.log(this.order);
        
      }
    )
  }

  goBack() {
    this.router.navigate(['/purchase-order-list']);
    }

    cambiarImagen(event: Event) {
      this.serviceOrder.defaultImage(event);
    }


}
