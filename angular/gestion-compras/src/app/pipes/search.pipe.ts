import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], input: any): Product[] {
    if(input === '' || input === undefined) {
      return value;
    }
    return value.filter((item: Product) => item.name.includes(input));
  }

}
