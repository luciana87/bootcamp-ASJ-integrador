import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';

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
    let confirmacion = confirm(`¿Desea eliminar el proveedor ${supplier.business_name}?`)
    if (confirmacion) {
    this.service.deleteSupplier(supplier);
    this.supplierList = this.service.getSuppliers();
    }
  }
}
