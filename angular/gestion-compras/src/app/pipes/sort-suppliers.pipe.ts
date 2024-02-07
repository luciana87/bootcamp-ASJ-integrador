import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from '../models/supplier';

@Pipe({
  name: 'sortSuppliers'
})
export class SortSuppliersPipe implements PipeTransform {

  transform(suppliers: Supplier[]): Supplier[] {
    suppliers.sort((supplierA: Supplier, supplierB: Supplier) => {
      if (supplierA.businessName < supplierB.businessName) {
        return -1;
      }
      return (supplierA.businessName > supplierB.businessName) ? 1 : 0;
    });
    return suppliers;  
  }

}
