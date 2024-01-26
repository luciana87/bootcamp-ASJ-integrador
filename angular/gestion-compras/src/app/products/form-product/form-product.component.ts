import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';
import { ProductUtils } from 'src/app/utils/product';

import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { Category } from 'src/app/models/category';
import { categories } from 'src/app/data/categories';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  providers: [ProductServiceService]
})
export class FormProductComponent implements OnInit {


  product: Product = ProductUtils.initializeProduct();
  suppliers: Supplier[] = [];

  //categoryList: Category[] = categories;
  categoryList!: Category[];

  constructor(public service: ProductServiceService, public serviceSupplier: SupplierServiceService, private router: Router,
    private route: ActivatedRoute, public builder: FormBuilder) { }

  ngOnInit() {
    //this.serviceSupplier.getSuppliers();
    // this.route.paramMap.subscribe((param: any) => {
    //   const id = param.get('id');
    //   if (id == null) { //Si es null es un nuevo producto
    //     this.product = ProductUtils.initializeProduct(); //Lo inicializo
    //   } else { //Si no es null lo edito
    //     this.product = this.service.getProductById(parseInt(id)) || ProductUtils.initializeProduct(); // || si mandan un id que no se encuentra se tiene que inicializar como si fuese uno nuevo
    //   }

    // });
  }



  createProduct(form: NgForm) {
    //   console.log(form.value);
    //   if (!form.valid) {
    //     console.log("Formulario inválido.");
    //     return;
    //   }
    //   console.log(this.product);

    //   let supplier = this.suppliers.find(supplier => supplier.id == form.value.supplier);
    //   let category = this.categoryList.find(c => c.id == form.value.category);
    //   this.product.supplier = supplier!;
    //   this.product.category = category!;

    //   if (this.product.id != -1) {
    //     // Lo actualizo
    //     this.service.updateProduct(this.product);
    //   } else {

    // this.product = {
    //   supplier: supplier!,
    //   sku: form.value.sku,
    //   name: form.value.name,
    //   category: category!,
    //   description: form.value.description,
    //   price: form.value.price,
    //   image: form.value.image,
    //   id: -1
    // };

    //     this.service.createProduct(this.product);
    //   }
    //   this.router.navigate(['/product-list'])
  }
}
