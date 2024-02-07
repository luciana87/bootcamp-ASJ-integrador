import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    products.sort((productA: Product, productB: Product) => {
      if (productA.name < productB.name) {
        return -1;
      }
      return (productA.name > productB.name) ? 1 : 0;
    });
    return products;  
  }
}
