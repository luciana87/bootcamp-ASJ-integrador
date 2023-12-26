import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

export class FormPurchaseOrderComponent implements OnInit {

  order!: PurchaseOrder;
  supplierList!: Supplier[];
  productList!: Product[];
  filteredProducts: Product[] = [];

  constructor(public service: PurchaseOrderServiceService, public serviceSupplier: SupplierServiceService,
              public serviceProduct: ProductServiceService, private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
    this.supplierList = this.serviceSupplier.getSuppliers();
    this.productList = this.serviceProduct.getProducts();

    this.route.paramMap.subscribe((param: any) => {
      const id = param.get('id');
      if (id === null) { //Si es null es un nuevo Supplier
        this.order = OrderUtils.initializeOrder(); //Lo inicializo
      } else { //Si no es null lo edito
        this.order = this.service.getOrderById(parseInt(id)) || OrderUtils.initializeOrder(); // || si mandan un id que no se encuentra se tiene que inicializar como si fuese uno nuevo
      }
    });
  }

  onSupplierChange(value: any) {
    // Realiza el filtrado de productos cada vez que cambie el proveedor
    let supplier_id = parseInt(value);
    if (supplier_id) {
      this.filteredProducts = this.filterProductsBySupplier(supplier_id);
    }
  }

  filterProductsBySupplier(supplier_id: number) {
    return this.productList.filter((product) => (product.supplier.id === supplier_id))
  }

  createOrder(form: NgForm) {
    if (!form.valid) {
      console.log("Formulario inválido.");
      return;
    }

    let supplierFound = this.supplierList.find(supplier => supplier.id === parseInt(form.value.supplier));
    let productFound = this.productList.find((product) => product.id === parseInt(form.value.product));

    this.order.product = productFound!;
    this.order.subtotal =  form.value.amount * productFound!.price;
    this.order.price = productFound!.price;
    this.order.supplier = supplierFound!;
    this.order.issue_date = new Date(form.value.issueDate);
    this.order.deadline = new Date(form.value.deadline);

    if (this.order.id != -1) {
      this.service.updateOrder(this.order);
    } else {

      this.service.createOrder(this.order);
    }
    this.router.navigate(['/purchase-order-list'])
    // this.filteredProducts = this.filterProductsBySupplier();
    // console.log(this.filteredProducts);
  }
}
