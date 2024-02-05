import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryRequestDTO } from 'src/app/models/categoryRequestDTO';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import { CategoryUtils } from 'src/app/utils/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent {

  category: Category = { id: -1, name: '', createdAt: new Date, updatedAt: new Date, deleted: false }
  category_name = '';
  constructor(private seviceCategory: CategoryService, private router: Router) { }

  public save() {
    if (this.category.id != -1) {
      // Lo actualizo
      this.seviceCategory.updateCategory(this.category.id, this.category).subscribe(
        (data: Category) => {
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
                title: "La categoría se editó correctamente",
                showConfirmButton: false,
                timer: 900
              });
              this.router.navigate(['/category-list']);
            }
          });
        }
      );
    } else {
      //Lo creo
      this.seviceCategory.createCategory(this.category).subscribe(
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
          this.router.navigate(['/category-list'])
        }
      )
    }
  }

  reset() {
    this.router.navigate(['/category-list'])
  }


}
