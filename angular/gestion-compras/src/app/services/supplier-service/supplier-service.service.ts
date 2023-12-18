import { Injectable } from '@angular/core';
import { suppliers } from 'src/app/data/suppliers';

const dataSuppliers = suppliers;

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  constructor() { }

  getSupplier(){
    return dataSuppliers;
  }
}
