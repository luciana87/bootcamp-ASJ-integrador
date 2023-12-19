import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  providers: [ProductServiceService]
})
export class FormProductComponent implements OnInit {

  product!: Product;
  supplier_id: string = '';
  sku: string = '';
  name: string = '';
  category: string = '';
  price: number = 0;
  description: string = '';



  constructor(public service: ProductServiceService){ }

  setValue(supplier_id: string, sku: string, name: string, category: string, price: string, description: string) {
    this.product = {
      supplier_id: supplier_id,
      sku: sku,
      name: name,
      category: category,
      description: description,
      price: price
    };
    console.log(this.product);


  }

  ngOnInit() {
    this.service.addProduct(this.product);
  }
}
