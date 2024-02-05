import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'activeCategory'
})
export class ActiveCategoryPipe implements PipeTransform {

  transform(categories: Category[]): Category[] {
    if (!categories) {
      return [];
    }
    return categories.filter(category => !category.deleted);
  }
}
