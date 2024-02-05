import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/categoryService/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

categories: Category[] = [];

constructor(private serviceCategory: CategoryService){}

  ngOnInit(): void {
    this.getCategories();
  }
public getCategories(){
  this.serviceCategory.getCategories().subscribe(
    (data: Category[]) => {
      this.categories = data;
      
      this.categories.sort(this.sortByName);
    }
  )
}

public delete(category: Category){
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
      this.serviceCategory.delete(category.id).subscribe(
        (data) => {
          console.log(data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El producto ha sido eliminado.",
            showConfirmButton: false,
            timer: 900
          });
          this.getCategories();
        });
    };
  })
}

public sortByName(categoryA: Category, categoryB: Category) {
  if (categoryA.name < categoryB.name) {
    return -1;
  }
  return (categoryA.name > categoryB.name) ? 1 : 0;
}

}
