import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemDetailDTO } from 'src/app/models/itemDetailDTO';
import { PurchaseOrderResponseDTO } from 'src/app/models/purchaseOrderResponseDTO';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';
import { PurcharseOrderResponseDTOUtils } from 'src/app/utils/purchaseOrderResponseDTO';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {

  order: PurchaseOrderResponseDTO = PurcharseOrderResponseDTOUtils.initializePurchaseOrderResponseDTO();
  itemDetailList: ItemDetailDTO[] = [];
  id: number = -1;

  constructor(public serviceOrder: PurchaseOrderServiceService,
              private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((param: any) => {
      const idString = param.get('id');
      if (idString) {
        this.id = +idString; //Convierte de cadena a numero
        this.serviceOrder.getOrderById(this.id).subscribe(
          (data) => {
            console.log(data);
            
            this.order = data;
            this.itemDetailList = data.itemsDTO;
            console.log(this.itemDetailList);
            
            console.log(this.order);
          });
      }
    });


  }

  goBack() {
    this.router.navigate(['/purchase-order-list']);
    }

    cambiarImagen(event: Event) {
      this.serviceOrder.defaultImage(event);
    }


}
