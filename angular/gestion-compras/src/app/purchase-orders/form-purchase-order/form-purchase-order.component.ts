import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { Supplier } from 'src/app/models/supplier';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { OrderUtils } from 'src/app/utils/order';

@Component({
  selector: 'app-form-purchase-order',
  templateUrl: './form-purchase-order.component.html',
  styleUrls: ['./form-purchase-order.component.css']
})

export class FormPurchaseOrderComponent implements OnInit{

  order: PurchaseOrder = OrderUtils.initializeOrder();
  supplierList!: Supplier[];
  productList!: Product[];
  filteredProducts: Product[] =[];

  constructor(public service: PurchaseOrderServiceService, public serviceSupplier: SupplierServiceService,
              public serviceProduct: ProductServiceService){  }

  ngOnInit(): void {
    this.supplierList = this.serviceSupplier.getSuppliers();
    this.productList = this.serviceProduct.getProducts();
  }

  onSupplierChange(value: any) {
    // Realiza el filtrado de productos cada vez que cambie el proveedor
    let supplier_id = parseInt(value);
    if (supplier_id) {
      this.filteredProducts = this.filterProductsBySupplier(supplier_id);
    }
  }

  filterProductsBySupplier(supplier_id: number){
    return this.productList.filter((product) =>( product.supplier.id === supplier_id))
  }

  createOrder(form: NgForm){
    // this.filteredProducts = this.filterProductsBySupplier();
    // console.log(this.filteredProducts);
    

  }
}
