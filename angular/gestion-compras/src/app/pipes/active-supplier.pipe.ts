import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from '../models/supplier';

@Pipe({
  name: 'activeSupplier'
})
export class ActiveSupplierPipe implements PipeTransform {

  transform(suppliers: Supplier[], showDeleted: boolean): Supplier[] {
    if (!suppliers) {
      return [];
    }
    return suppliers.filter(supplier => supplier.deleted === showDeleted);
  }

}
