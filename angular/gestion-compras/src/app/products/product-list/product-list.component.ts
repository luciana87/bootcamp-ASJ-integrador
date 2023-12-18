import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductListComponent implements OnInit{

  productList: any[] =[];

  constructor(public service: ProductServiceService){}

  ngOnInit(): void {
    this.productList = this.service.getProducts();
  }

}
