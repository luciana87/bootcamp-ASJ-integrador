import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  providers: [ProductServiceService]
})
export class FormProductComponent implements OnInit {

  // product!: {sku: number, supplier_id: String,  name: String, category: string, description: String,price: number};

  product!: {};

  constructor(public service: ProductServiceService) { }


  ngOnInit(): void {

    this.service.addProduct(this.product);
  }
}
