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
export class DetailProductComponent implements OnInit {

  product: Product = ProductUtils.initializeProduct();
  id: number | null = -1;

  constructor(public service: ProductServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      const idString = param.get('id');
      if (idString) {
        this.id = +idString; //Convierte de cadena a numero
        this.service.getProductById(this.id).subscribe(
          (data) => {
            this.product = data;
            console.log(this.product);
          });
      }
    });

  }

  goBack() {
    this.router.navigate(['/products']);
  }

  cambiarImagen(event: Event) {
    this.service.defaultImage(event);
  }
}
