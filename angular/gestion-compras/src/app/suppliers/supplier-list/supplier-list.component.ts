import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SearchSupplierPipe } from 'src/app/pipes/search-supplier.pipe';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { SupplierUtils } from 'src/app/utils/supplier';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers: [SupplierServiceService]
})

export class SupplierListComponent implements OnInit {


  supplierList: Supplier[] = [];
  deletedSuppliers: Supplier[] = [];
  supplier: Supplier = SupplierUtils.initializeSupplier();
  activeSuppliers: Supplier[] = [];
  input_search: String = '';

  showDeleted: boolean = false;

  constructor(public service: SupplierServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getSuppliers();

  }

  public delete(supplier: Supplier) {
    Swal.fire({
      title: `¿Está seguro que desea eliminar el proveedor ${supplier.businessName}?`,
      text: " Tenga en cuenta que esta acción eliminará todos los productos vinculados a él.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteSupplier(supplier.id).subscribe(
          (data) => {
            console.log(data);
            Swal.fire(
              '¡Eliminado!',
              'El proveedor ha sido eliminado.',
              'success'
            )
            this.getSuppliers();
          });
      };
    })
  }

  public activateSupplier(supplier: Supplier) {
    Swal.fire({
      title: `¿Está seguro que desea activar el proveedor ${supplier.businessName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, activar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.activateSupplier(supplier.id, supplier).subscribe(
          (data) => {
            console.log(data);
            Swal.fire(
              'Activado!',
              'El proveedor está activo nuevamente.',
              'success'
            )
            this.getSuppliers();
          });
      };
    })
  }

  public getSuppliers() {
    this.service.getSuppliers().subscribe(
      (suppliers: Supplier[]) => {
        this.supplierList = suppliers;
      },
      (error) => {
        console.error("Error al obtener proveedores:", error);
      }
    );
  }

  public getDeletedSuppliers() {

    this.service.getSuppliers().subscribe(
      (deletedList: Supplier[]) => {
        this.deletedSuppliers = deletedList;
      },
      (error) => {
        console.error("Error al obtener proveedores:", error);
      }
    );
  }

  public defaultImage(event: Event) {
    this.service.defaultImage(event);
  }
}
