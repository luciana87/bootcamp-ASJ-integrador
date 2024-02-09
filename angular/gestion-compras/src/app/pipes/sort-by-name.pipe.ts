import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(array: any[]): any[] {
    array.sort((strA: any, strB: any) => {
      if (strA.name < strB.name) {
        return -1;
      }
      return (strA.name > strB.name) ? 1 : 0;
    });
    return array;  
  }
}
