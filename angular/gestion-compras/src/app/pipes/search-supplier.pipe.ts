import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from '../models/supplier';

@Pipe({
  name: 'searchSupplier'
})
export class SearchSupplierPipe implements PipeTransform {

  transform(value: Supplier[], input: any): Supplier[] {
    if(input === '' || input === undefined) {
      return value;
    }
    return value.filter((supplier: Supplier) => supplier.businessName.includes(input) || supplier.code.includes(input) || supplier.address.province.name.includes(input) || supplier.address.province.country.name.includes(input));
  }
}
