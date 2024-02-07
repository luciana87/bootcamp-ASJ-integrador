import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @Input() categories: Category[] = [];
  @Output() updateCategoryEvent = new EventEmitter<Category>();
  @Output() deleteCategoryEvent = new EventEmitter<Category>();

  constructor(private serviceCategory: CategoryService) { }

  public getCategories() {
    this.serviceCategory.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      }
    )
  }

  updateCategory(category: Category) {
    this.updateCategoryEvent.emit(category);
  }

  public delete(category: Category) {
    Swal.fire({
      title: `¿Está seguro que desea eliminar la categoría ${category.name}?`,
      text: " Tenga en cuenta que esta acción no podrá deshacerse.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCategoryEvent.emit(category);
      };
    })
  }
}
