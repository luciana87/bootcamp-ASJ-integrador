import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ActiveProductPipe } from 'src/app/pipes/active-product.pipe';
import { CategoryPipe } from 'src/app/pipes/category.pipe';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { CategoryService } from 'src/app/services/categoryService/category.service';
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
  activeProducts: Product[] = [];
  filteredProducts: Product[] = [];

  uniqueCategories: Category[] = [];

  //ngModels:
  input_search: String = '';
  nullCategory = {id:-1,name:'',createdAt: new Date, updatedAt: new Date, deleted: false};
  category: Category = this.nullCategory;


  constructor(private service: ProductServiceService, private activeProductPipe: ActiveProductPipe,
                private categoryPipe: CategoryPipe ,private searchPipe: SearchPipe, private serviceCategory: CategoryService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public sortByName(productA: Product, productB: Product) {
    if (productA.name < productB.name) {
      return -1;
    }
    return (productA.name > productB.name) ? 1 : 0;
  }

  public getProducts() {
    this.service.getProducts().subscribe(
      (products) => {
        this.productList = this.activeProductPipe.transform(products); //pipe
        this.activeProducts =  this.productList;
        console.log(this.productList);

        let uniqueCategoriesById: { [id: number]: boolean } = {};
        let categories: Category[] = this.productList.flatMap(product => product.category);

        // Filtramos las categorías para obtener solo las únicas por su id
        this.uniqueCategories = categories.filter(category => {
            if (!uniqueCategoriesById[category.id]) {
                uniqueCategoriesById[category.id] = true;
                return true;
            }
            return false;
        });
        this.productList.sort(this.sortByName);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  applyCategoryFilter() {
    // if (this.category) {
    //   // this.activeProducts = this.productList.filter(product => product.category.name === this.category.name);
    //   this.activeProducts = this.categoryPipe.transform(this.productList, this.category);
    // } else {
    //   this.activeProducts = this.productList;
    // }
  }
  
  applySearchFilter(){

    // if (this.input_search != "") {
    //   this.activeProducts = this.searchPipe.transform(this.productList, this.input_search);
    // } else {
    //   this.activeProducts = this.productList;
    // }
  }

  // public getActiveProducts() { 
  //   this.service.getProducts().subscribe(
  //     (products: Product[]) => {
  //       this.productList = products;
  //       this.activeProducts = this.productList.filter(product => !product.deleted);
  //     },
  //     (error) => {
  //       console.error("Error al obtener proveedores:", error);
  //     }
  //   );
  // }

  delete(product: Product) {
    Swal.fire({
      title: `¿Está seguro que desea eliminar el producto ${product.name}?`,
      text: " Tenga en cuenta que esta acción no podrá deshacerse.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProduct(product.id).subscribe(
          (data) => {
            console.log(data);
            // Swal.fire(
            //   '¡Eliminado!',
            //   'El producto ha sido eliminado.',
            //   'success'
            // )
            Swal.fire({
              position: "center",
              icon: "success",
              title: "El producto ha sido eliminado.",
              showConfirmButton: false,
              timer: 900
            });
            this.getProducts();
          });
      };
    })

  };

  public changeImage(event: Event) {
    this.service.defaultImage(event);
  }

}
