import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  category: Category = { id: -1, name: '', createdAt: new Date, updatedAt: new Date, deleted: false }
  categories: Category[] = [];

  constructor(private serviceCategory: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
    this.reset();
  }

  public save() {
    if (this.category.id != -1) {
      // Lo actualizo
      this.serviceCategory.updateCategory(this.category.id, this.category).subscribe(
        (data: Category) => {
          console.log("Categoría modificado:", data);
          Swal.fire({
            title: "Desea guardar los cambios?",
            showCancelButton: true,
            confirmButtonText: "Guardar",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "La categoría se editó correctamente",
                showConfirmButton: false,
                timer: 900
              });
              this.getCategories();
              this.reset();
            }
          });
        }
      );
    } else {
      //Lo creo
      this.serviceCategory.createCategory(this.category).subscribe(
        (data) => {
          this.category = data;
          this.category.name = '';
          Swal.fire({
            position: "center",
            icon: "success",
            title: "La categoría se creó correctamente.",
            showConfirmButton: false,
            timer: 900
          });
          this.getCategories();
          this.category.name = '';
        }
      )
    }
  }

  public getCategories() {
    this.serviceCategory.getCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }

  reset() {
    this.category = { id: -1, name: '', createdAt: new Date, updatedAt: new Date, deleted: false };
  }

  updateCategoryEvent(category: Category) {
    this.category = category;
  }

  deleteCategoryEvent(category: Category) {
    this.serviceCategory.delete(category.id).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "La categoría ha sido eliminado.",
          showConfirmButton: false,
          timer: 900
        });
        this.getCategories();
      });
  }


}
