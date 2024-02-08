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
import Swal from 'sweetalert2';


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

  errorMessage: string | null = null;
  showErrorMessage: boolean = false;


  constructor(
    public serviceProduct: ProductServiceService, 
    public serviceSupplier: SupplierServiceService, 
    public serviceCategory: CategoryService, 
    private router: Router,
    private route: ActivatedRoute, 
    public builder: FormBuilder) { }

  ngOnInit() {
    this.getSuppliers();
    this.getCategories();
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

  public getSuppliers() {
    this.serviceSupplier.getSuppliers().subscribe(
      (data) => {
        this.suppliers = data;
        console.log(this.suppliers);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  public getCategories() {
    this.serviceCategory.getCategories().subscribe(
      (data: Category[]) => {
        this.categoryList = data;
        console.log(this.categoryList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  public save(form: NgForm) {
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
          Swal.fire({
            title: "Desea guardar los cambios?",
            showCancelButton: true,
            confirmButtonText: "Guardar",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "El producto se editó correctamente",
                showConfirmButton: false,
                timer: 900
              });
              this.router.navigate(['/products'])
            }
          }, error => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: error.error,
              showConfirmButton: true
            });
          }
          );
        }
      );
    } else {
      //Lo creo
      this.serviceProduct.createProduct(form).subscribe((data: Product) => {
        console.log("Producto creado:", data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El producto se creó correctamente.",
          showConfirmButton: false,
          timer: 900
        });
        this.router.navigate(['/products']);
      }, (error) => {
        if (error.status !== 201) {
          this.errorMessage = error.error;
          this.showErrorMessage = true;
        }
        // Swal.fire({
        //   position: "center",
        //   icon: "error",
        //   title: error.error,
        //   showConfirmButton: true
        // })
      });
      this.showErrorMessage = false;
    };
  }

  public addCategory() {
    if (this.category.name.trim() !== '') {
      this.serviceCategory.createCategory(this.category).subscribe(
        response => {
          console.log('Nueva categoría agregada:', response);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se agregó la categoría con éxito.",
            showConfirmButton: false,
            timer: 900
          });
          this.categoryList.push(response);
          this.category.name = '';
        },
        error => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.error,
            showConfirmButton: true
          })
          console.error('Error al agregar categoría:', error);
        }
      );
    }
  }
}