import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'sortCategories'
})
export class SortCategoriesPipe implements PipeTransform {

  transform(categories: Category[]): Category[] {
    categories.sort((categoryA: Category, categoryB: Category) => {
      if (categoryA.name < categoryB.name) {
        return -1;
      }
      return (categoryA.name > categoryB.name) ? 1 : 0;
    });
    return categories;  
  }
}
