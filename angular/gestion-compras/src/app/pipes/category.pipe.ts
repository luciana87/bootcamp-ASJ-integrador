import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(value: Product[], arg1: any): Product[] {
    if(arg1.id === -1 || arg1 === undefined) {
      return value;
    }
    return value.filter((item: Product) => item.category.id === arg1.id);
  }


}
