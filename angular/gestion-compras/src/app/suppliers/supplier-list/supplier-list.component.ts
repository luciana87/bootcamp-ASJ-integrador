import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers: [SupplierServiceService]
})
export class SupplierListComponent implements OnInit{


  supplierList: Supplier[] = [];
  
  constructor(public service: SupplierServiceService){}

  ngOnInit(): void {
    this.supplierList = this.service.getSuppliers();
  }

  delete(supplier: Supplier){
    Swal.fire({
      title: `¿Desea eliminar el proveedor ${supplier.business_name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteSupplier(supplier);
        this.supplierList = this.service.getSuppliers();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };
}
