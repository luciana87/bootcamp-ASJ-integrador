import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Supplier } from 'src/app/models/supplier';
import { Country } from 'src/app/models/country';
import { Field } from 'src/app/models/field';
import { Province } from 'src/app/models/province';
import { IvaType } from 'src/app/models/ivaType';

import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { FieldService } from 'src/app/services/fieldService/field.service';
import { IvaService } from 'src/app/services/ivaService/iva.service';
import { CountryService } from 'src/app/services/countryService/country.service';
import { ProvinceService } from 'src/app/services/provinceService/province.service';

import { SupplierUtils } from 'src/app/utils/supplier';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-supplier',
  templateUrl: './form-supplier.component.html',
  styleUrls: ['./form-supplier.component.css']
})
export class FormSupplierComponent implements OnInit {

  supplier: Supplier = SupplierUtils.initializeSupplier();
  countries: Country[] = [];
  provinces: Province[] = [];
  fields: Field[] = [];
  ivaList: IvaType[] = [];
  filteredProvinces: Province[] = [];
  selectedCountry: Country | null = null;
  field: Field = {
    name: ''
  }
  id: number = -1;

  constructor(public serviceSupplier: SupplierServiceService, public serviceField: FieldService, public serviceIva: IvaService,
    public serviceCountry: CountryService, public serviceProvince: ProvinceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCountries();
    this.getProvinces();
    this.route.paramMap.subscribe((param: any) => {
      const idString = param.get('id');
      if (idString) {
        this.id = +idString; //Convierte de cadena a numero
        this.serviceSupplier.getSupplierById(this.id).subscribe(
          (data) => {
            this.supplier = data;
            this.onCountryChange();
            // this.isUpdate = true; solo es necesario si el formulario se comparta distinto cuando es un update
            console.log(this.supplier);
          });
      }
    });  
    this.getFields();
    this.getIvaConditions();
  
  }

  getProvinces(){
    
    this.serviceProvince.getProvinces().subscribe((data) => {
      this.provinces = data;
      console.log(this.provinces);
    },
      (error) => {
        console.error('Error:', error);
      });
  }

  getCountries() {
    this.serviceCountry.getCountries().subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    },
      (error) => {
        console.error('Error:', error);
      });
  }

  getIvaConditions() {
    this.serviceIva.getIvaConditions().subscribe((data) => {
      this.ivaList = data;
      console.log(this.ivaList);
    },
      (error) => {
        console.error('Error:', error);
      });
  }

  public getFields() {
    this.serviceField.getFields().subscribe((data) => {
      this.fields = data;
      console.log(this.fields);
    },
      (error) => {
        console.error('Error:', error);
      });
  }

  save(formData: NgForm) {
    console.log(formData.value);
    if (!formData.valid) {
      console.log("Formulario inválido.");
      return;
    }

    if (this.supplier.id != -1) {
      //Lo actualizo
      this.serviceSupplier.updateSupplier(this.supplier.id, this.supplier).subscribe(
        (data: Supplier) => {
          console.log("Proveedor editado: ", data);
          Swal.fire({
            title: "Desea guardar los cambios?",
            showCancelButton: true,
            confirmButtonText: "Guardar",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "El proveedor se editó correctamente",
                showConfirmButton: false,
                timer: 900
              });
              this.router.navigate(['/supplier-list'])
            }
          });
        }
      );
    } else {
      //Lo creo
      this.serviceSupplier.createSupplier(formData).subscribe((data: Supplier) => {
        console.log("Proveedor creado:", data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El proveedor se creó correctamente",
          showConfirmButton: false,
          timer: 900
        });
        this.router.navigate(['/supplier-list'])
      }, (error) => {
        console.error("Error al crear el producto:", error);
      });
    };
  }

  addField() {
    if (this.field.name.trim() !== '') {
      this.serviceField.createField(this.field).subscribe(
        response => {
          console.log('Nuevo rubro agregado:', response);
          this.fields.push(response)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Se agregó el rubro con éxito.",
            showConfirmButton: false,
            timer: 900
          });
          this.field.name= '';
        },
        error => {
          console.error('Error al agregar rubro:', error);
        }
      );
    }
  }

  onCountryChange(): void {
    console.log('País seleccionado:', this.supplier.address.province.country.id);
    console.log('Todas las provincias:', this.provinces);
    const selectedCountryId = this.supplier.address.province.country.id;

    if (selectedCountryId != -1) {
      console.log('ID del país seleccionado:', selectedCountryId);

      this.filteredProvinces = this.provinces.filter(province => province.country.id === selectedCountryId);
      console.log('Provincias filtradas:', this.filteredProvinces);
    } else {
      this.filteredProvinces = [];
    }
  }

}


