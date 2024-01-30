import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { ProductUtils } from 'src/app/utils/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit{

  product!: Product;

  constructor(public service: ProductServiceService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((param: any) => {
    //   const id = param.get('id');

    //   if (id) {
    //     this.product = this.service.getProductById(parseInt(id)) || ProductUtils.initializeProduct();
    //   }

    // })
  }

  goBack() {
    this.router.navigate(['/product-list']);
    }
    
    cambiarImagen(event: Event) {
      this.service.defaultImage(event);
    }
}
