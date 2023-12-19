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

  
  product: Product = {

    supplier_id: '',
    sku:0,
    name:'',
    category: '',
    price: 0,
    description: ''
}

  constructor(public service: ProductServiceService){ }
//supplier_id: string, sku: number, name: string, category: string, description: string, price: number
  setValue (producto: Product) {
    this.product = {
      supplier_id: producto.supplier_id,
      sku: producto.sku,
      name: producto.name,
      category: producto.category,
      description: producto.description,
      price: producto.price
    };
    console.log(this.product);
    this.service.addProduct(this.product);


  }

  ngOnInit() {
    
  }
}
