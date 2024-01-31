import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor(public service: ProductServiceService ) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      (products) => {
        this.productList = products;
        console.log(this.productList);
        
        this.productList.sort(this.sortByName);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  sortByName(productA: Product, productB: Product) {
    if (productA.name < productB.name) {
      return -1;
    }
    return (productA.name > productB.name) ? 1 : 0;

  }

  delete(product: Product) {

    // Swal.fire({
    //   title: `¿Desea eliminar el product ${product.name}?`,
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Sí, eliminar!",
    //   cancelButtonText: "Cancelar"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     this.service.deleteProduct(product);
    //     this.productList = this.service.getProducts();
    //     Swal.fire({
    //       title: "Eliminado!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
  };

  cambiarImagen(event: Event) {
    this.service.defaultImage(event);
  }

}
