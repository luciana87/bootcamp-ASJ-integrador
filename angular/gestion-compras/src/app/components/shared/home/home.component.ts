import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { PurchaseOrderServiceService } from 'src/app/services/purchase-order-service/purchase-order-service.service';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  amountProducts: number = 0;
  amountSuppliers: number = 0;
  amountOrders: number = 0;

  constructor(private serviceProduct: ProductServiceService, private serviceSupplier: SupplierServiceService,
    private serviceOrder: PurchaseOrderServiceService) { }

  ngOnInit(): void {

    this.getAmountProducts();
    this.getAmountSuppliers();
    this.getAmountOrders();

  }

  getAmountProducts() {
    this.serviceProduct.calculateAmountProducts().subscribe(
      (data: number) => {
        this.amountProducts = data;
      }
    )
  }

  getAmountSuppliers() {
    this.serviceSupplier.calculateAmountSuppliers().subscribe(
      (data: number) => {
        this.amountSuppliers = data;
      }
    )
  }

  getAmountOrders() {
    this.serviceOrder.calculateAmountOrders().subscribe(
      (data: number) => {
        this.amountOrders = data;
      }
    )
  }

}
