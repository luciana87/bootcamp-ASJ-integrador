import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';
import { ProductUtils } from 'src/app/utils/product';

import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { CategoryUtils } from 'src/app/utils/category';
import { CategoryRequestDTO } from 'src/app/models/categoryRequestDTO';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  providers: [ProductServiceService]
})
export class FormProductComponent implements OnInit {


  product: Product = ProductUtils.initializeProduct();
  suppliers: Supplier[] = [];
  categoryList: Category[] = [];
  category: CategoryRequestDTO = CategoryUtils.initializeCategory();
  id: number = -1;
  // isUpdate: boolean = false;


  constructor(public serviceProduct: ProductServiceService, public serviceSupplier: SupplierServiceService, public serviceCategory: CategoryService, private router: Router,
    private route: ActivatedRoute, public builder: FormBuilder) { }

  ngOnInit() {
    this.serviceSupplier.getSuppliers().subscribe(
      (data) => {
        this.suppliers = data;
        console.log(this.suppliers);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.serviceCategory.getCategories().subscribe(
      (data) => {
        this.categoryList = data;
        console.log(this.categoryList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.route.paramMap.subscribe((param: any) => {
      const idString = param.get('id');
      if (idString) {
        this.id = +idString; //Convierte de cadena a numero
        this.serviceProduct.getProductById(this.id).subscribe(
          (data) => {
            this.product = data;
            // this.isUpdate = true; solo es necesario si el formulario se comparta distinto cuando es un update
            console.log(this.product);
          });
      }
    });    
  }


  save(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      console.log("Formulario inválido.");
      return;
    }

    if (this.product.id != -1) {
      // Lo actualizo
      this.serviceProduct.updateProduct(this.product.id, this.product).subscribe(
        (data: Product) => {
          console.log("Producto modificado:", data);
          alert("Modificado correctamente")
          // this.router.navigate(['/product-list']);
        }
      );
    } else {
      //Lo creo
      this.serviceProduct.createProduct(form).subscribe((data: Product) => {
        console.log("Producto creado:", data);
        this.router.navigate(['/product-list']);
      }, (error) => {
        console.error("Error al crear el producto:", error);
      });
    };
  }

  addCategory() {
    if (this.category.name.trim() !== '') {
      this.serviceCategory.createCategory(this.category).subscribe(
        response => {
          console.log('Nueva categoría agregada:', response);
          this.categoryList.push(response);
        },
        error => {
          console.error('Error al agregar categoría:', error);
        }
      );
    }
  }
}