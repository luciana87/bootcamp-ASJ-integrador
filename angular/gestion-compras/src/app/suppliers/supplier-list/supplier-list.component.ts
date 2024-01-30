import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
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
  supplier: Supplier = SupplierUtils.initializeSupplier();
  activeSuppliers: Supplier[] = [];

  constructor(public service: SupplierServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getActiveSuppliers();
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
            this.getActiveSuppliers()
          });
      };
    })
  };

  public getActiveSuppliers() {
    
    this.service.getSuppliers().subscribe(
      (suppliers: Supplier[]) => {
        this.supplierList = suppliers;
        this.activeSuppliers = this.supplierList.filter(supplier => !supplier.deleted);
      },
      (error) => {
        console.error("Error al obtener proveedores:", error);
      }
    );
  }

  cambiarImagen(event: Event) {
    this.service.defaultImage(event);
  }
}
