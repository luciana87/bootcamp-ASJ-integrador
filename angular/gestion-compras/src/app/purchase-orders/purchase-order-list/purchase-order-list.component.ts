import { Component, OnInit } from '@angular/core';
import { PurchaseOrderResponseDTO } from 'src/app/models/purchaseOrderResponseDTO';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css'],
  providers: [PurchaseOrderServiceService]
})
export class PurchaseOrderListComponent implements OnInit {

  orderList: PurchaseOrderResponseDTO[] = [];
  input_search: String = '';

  constructor(public serviceOrder: PurchaseOrderServiceService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.serviceOrder.getPurchaseOrders().subscribe(
      (data) => {
        this.orderList = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    )
  }

  cancel(order: PurchaseOrderResponseDTO) {
    Swal.fire({
      title: `¿Está seguro que desea cancelar la órden #${order.num_order}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceOrder.cancelOrder(order.id).subscribe(
          (data) => {
            console.log(data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "La órden de compra ha sido cancelada.",
              showConfirmButton: false,
              timer: 900
            });
            this.getOrders();
          });
      }
    })
  }
}
