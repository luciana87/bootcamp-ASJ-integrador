import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { Country } from 'src/app/models/country';
import { Field } from 'src/app/models/field';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { SupplierUtils } from 'src/app/utils/supplier';

@Component({
  selector: 'app-form-supplier',
  templateUrl: './form-supplier.component.html',
  styleUrls: ['./form-supplier.component.css']
})
export class FormSupplierComponent implements OnInit{

  supplier!: Supplier; 
  countries: Country[] = [];
  fields: Field[] = [];
  
  ivaList: String[] = ["IVA Responsable Inscripto", "IVA Responsable no Inscripto", "IVA no Responsable",
    "IVA sujeto Exento", "Consumidor Final", "Responsable Monotributo", "Sujeto no Categorizado",
    "Proveedor del Exterior", "Cliente del Exterior", "IVA Liberado",
    "Pequeño Contribuyente Eventual", "Monotributista Social", "Pequeño Constribuyente Eventual Social"];

  // country: Country
  // countries: Country[] = ["Argentina","Brasil","Chile","Uruguay"];
  // departaments: String[] = [];

  constructor(public service: SupplierServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.service.getSuppliers();
    this.route.paramMap.subscribe((param: any) => {
      const id = param.get('id');
      if (id == null) { //Si es null es un nuevo Supplier
        this.supplier = SupplierUtils.initializeSupplier(); //Lo inicializo
      } else { //Si no es null lo edito
        this.supplier = this.service.getSupplierById(parseInt(id)) ||  SupplierUtils.initializeSupplier(); // || si mandan un id que no se encuentra se tiene que inicializar como si fuese uno nuevo
      }
      
    });
  }

  createSupplier(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      console.log("Formulario inválido.");
      return;
    }

    if (this.supplier.id != -1) { //si es diferente a -1 quiere decir que obtuve un user para modificar
      //actualizo
      this.service.updateSupplier(this.supplier);
    } else {
      //creo
      this.service.createSupplier(this.supplier);
    }
    
    this.router.navigate(['/supplier-list'])
  }
}
