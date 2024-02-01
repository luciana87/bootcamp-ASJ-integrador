import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'activeProduct'
})
export class ActiveProductPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    if (!products) {
      return [];
    }
    return products.filter(product => !product.deleted);
  }

}
