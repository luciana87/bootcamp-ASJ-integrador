import { Injectable } from '@angular/core';
import { suppliers } from 'src/app/data/suppliers';
import { Supplier } from 'src/app/models/supplier';

const dataSuppliers: Supplier[] = suppliers;

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  id: number;

  constructor() {
    let suppliers = this.getSuppliers(); // Le asigno lo que venga del localStorage
    if (suppliers.length == 0) { // Si está vacío el [], no hay elementos en el localStorage
      suppliers = dataSuppliers; //Le asigno mi JSON
      localStorage.setItem("suppliers", JSON.stringify(dataSuppliers)) //Agrego al localStorage lo que tengo en mi JSON
    }
    let lastSupplier = suppliers[suppliers.length -1]
    this.id = lastSupplier.id
  }

  mostrarData() {
    console.log(dataSuppliers);
  }

  getSuppliers(): Supplier[] {
    let suppliers = localStorage.getItem('suppliers')
    return (suppliers !== null) ? JSON.parse(suppliers) : []; // Retorna lo que hay en localStorage o si no hay nada un []

  }

  getSupplierById(id: number) {
    let suppliers = this.getSuppliers()
    return suppliers.find((supplier) => supplier.id == id);
  }

  createSupplier(supplier: Supplier) {
    this.id += 1;
    supplier.id = this.id;
    let suppliers = this.getSuppliers();
    suppliers.push(supplier);
    localStorage.setItem('suppliers', JSON.stringify(suppliers));
    this.mostrarData();
  }

  updateSupplier(supplier: Supplier) {
    let suppliers = this.getSuppliers();
    let index = suppliers.findIndex(sup => sup.id == supplier.id);
    suppliers[index] = supplier;
    localStorage.setItem('suppliers', JSON.stringify(suppliers));

    this.mostrarData();
  }

  deleteSupplier(supplier: Supplier) {
    let suppliers = this.getSuppliers();
    const index = suppliers.findIndex(sup => sup.id == supplier.id);
    if (index > -1) {
      suppliers.splice(index, 1);
      localStorage.setItem('suppliers', JSON.stringify(suppliers)); 
    }
    this.mostrarData();
  }
}

