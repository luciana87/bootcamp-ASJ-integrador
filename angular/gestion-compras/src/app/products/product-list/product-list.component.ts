import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductListComponent implements OnInit {

  productList: any[] = [];

  constructor(public service: ProductServiceService) { }

  ngOnInit(): void {
    this.productList = this.service.getProducts();
    this.productList.sort(this.sortByName);
  }

  sortByName(productA: Product, productB: Product) {
    if (productA.name < productB.name) {
      return -1;
    }
    return (productA.name > productB.name) ? 1 : 0;

  }

  delete(product: Product) {
    let confirmacion = confirm(`¿Desea eliminar el product ${product.name}?`)
    if (confirmacion) {
      this.service.deleteProduct(product);
      this.productList = this.service.getProducts();

    }
  }


}
