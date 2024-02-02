import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseOrderRequestDTO } from 'src/app/models/purchaseOrderRequestDTO';
import { ItemDetail } from 'src/app/models/itemDetail';
import { Product } from 'src/app/models/product';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { Supplier } from 'src/app/models/supplier';

import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';

import { PurcharseOrderRequestDTOUtils } from 'src/app/utils/purchaseOrderRequestDTO';

@Component({
  selector: 'app-form-purchase-order',
  templateUrl: './form-purchase-order.component.html',
  styleUrls: ['./form-purchase-order.component.css'],
  providers: [SupplierServiceService]
})

export class FormPurchaseOrderComponent implements OnInit {

  order: PurchaseOrderRequestDTO = PurcharseOrderRequestDTOUtils.initializePurchaseOrderRequestDTO();
  supplierList: Supplier[] = [];
  productList: Product[] = [];
  filteredProducts: Product[] = [];
  orderList: PurchaseOrder[] = [];
  items: ItemDetail[] = [];
  id_item: number = 0;
  amount: number = 1;
  // product: Product = ProductUtils.initializeProduct();


  constructor(public serviceOrder: PurchaseOrderServiceService, public serviceSupplier: SupplierServiceService,
    public serviceProduct: ProductServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.getSuppliers();
    // this.getProducts();

  }

  getSuppliers(){
    console.log("Llegue");
    
    this.serviceSupplier.getSuppliers().subscribe(
      (data) => {
        this.supplierList = data;
        console.log(this.supplierList);
      });
  }

  getProducts(){
    this.serviceProduct.getProducts().subscribe(
      (data) => {
        this.productList = data;
        console.log(this.productList);
      });
  }


  onSupplierChange(value: number) {
    console.log(value);
    return this.serviceProduct.getProductsBySupplier(value).subscribe(      
      (data: Product[]) => {
        this.filteredProducts = data;
      }
    )
    // Realiza el filtrado de productos cada vez que cambie el proveedor
    // if (value !== null) {

    // } else {
    //   let confirmacion = confirm("Desea realmente modificar el proveedor? En ese caso se eliminaran los productos agregados.")
    // }

  }

  filterProductsBySupplier(supplier_id: number) {
    // return this.serviceOrder.getProductsBySupplier(supplier_id).subscribe(
    //   (data: Product[]) => {
    //     this.filteredProducts = data;
    //   }
    // )
    // return this.productList.filter((product) => (product.supplier.id === supplier_id))
  }

  createOrder(form: NgForm) {
    if (!form.valid) {
      console.log("Formulario inválido.");
      return;
  }

  this.serviceOrder.createOrder(form).subscribe((data) => {
    console.log("Se creó una órden de compra:", data);
    this.router.navigate(['/purchase-order-list'])
  });
}



  //let supplierFound = this.supplierList.find(supplier => supplier.id === parseInt(form.value.supplier));
  // let productFound = this.productList.find((product) => product.id === parseInt(form.value.product));

  //   this.order.items = this.items;
  //   this.order.total = this.items.reduce(function(a, b){
  //     return a + b.total;
  // }, 0);
  //   this.order.supplier = supplierFound!;
  //   this.order.createdAt = new Date(form.value.issueDate);
  //   this.order.deadline = new Date(form.value.deadline);

  //   if (this.order.id != -1) {
  //     this.service.updateOrder(this.order);
  //   } else {

  //     this.service.createOrder(this.order);
  //   }
  //   this.router.navigate(['/purchase-order-list'])
  // this.orderList.push(this.order);


  // this.filteredProducts = this.filterProductsBySupplier();
  // console.log(this.filteredProducts);

  addProduct(form: NgForm) {
    const formData = form.value;
  }
}