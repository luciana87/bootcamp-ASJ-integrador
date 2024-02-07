import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseOrderRequestDTO } from 'src/app/models/purchaseOrderRequestDTO';
import { Product } from 'src/app/models/product';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { Supplier } from 'src/app/models/supplier';

import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';

import { PurcharseOrderRequestDTOUtils } from 'src/app/utils/purchaseOrderRequestDTO';
import { ItemDetailDTO } from 'src/app/models/itemDetailDTO';
import { ProductUtils } from 'src/app/utils/product';
import { PurchaseOrderResponseDTO } from 'src/app/models/purchaseOrderResponseDTO';
import Swal from 'sweetalert2';

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
  items: ItemDetailDTO[] = [];
  id_item: number = 0;
  amount: number = 1;
  product: Product = ProductUtils.initializeProduct();


  constructor(public serviceOrder: PurchaseOrderServiceService, public serviceSupplier: SupplierServiceService,
    public serviceProduct: ProductServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.getSuppliers();

  }

  getSuppliers() {
    console.log("Llegue");

    this.serviceSupplier.getSuppliers().subscribe(
      (data) => {
        this.supplierList = data;
        console.log(this.supplierList);
      });
  }

  getProducts() {
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

  createOrder(form: NgForm) {
    if (!form.valid) {
      console.log("Formulario inválido.");
      return;
    }

    this.serviceOrder.createOrder(form, this.items).subscribe(
      (data: PurchaseOrderResponseDTO) => {
        console.log("Se creó una órden de compra:", data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "La órden de compra se creó correctamente.",
          showConfirmButton: false,
          timer: 900
        })
        this.router.navigate(['/purchase-order-list'])
      }, error => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.error,
          showConfirmButton: true
        }
        );
      });
  }

  addProduct() {
    if (!this.product.id || this.amount < 1) {
      console.log("Producto o cantidad no válidos.");
    }

    const selectedProduct = this.filteredProducts.find(product => product.id === +this.product.id);

    if (selectedProduct) {
      const existingItem = this.items.find(item => item.product.id === selectedProduct.id);
      if (existingItem) {
        existingItem.amount += this.amount;
        existingItem.total = existingItem.amount * selectedProduct.price;
      } else {
        const newItem: ItemDetailDTO = {
          id: this.id_item++,
          amount: this.amount,
          total: selectedProduct.price * this.amount,
          product: selectedProduct
        };
        this.items.push(newItem);
      }
    } else {
      console.log("Producto no encontrado.");
    }
  }

  public isDisableAddProductButton(){
    return !(this.order.supplier_id != -1 && this.product.id != -1 && this.amount > 0);
  }

}