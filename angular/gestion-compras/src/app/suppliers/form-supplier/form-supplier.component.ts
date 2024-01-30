import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { Country } from 'src/app/models/country';
import { Field } from 'src/app/models/field';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { Province } from 'src/app/models/province';
import { FieldService } from 'src/app/services/fieldService/field.service';
import { IvaService } from 'src/app/services/ivaService/iva.service';
import { IvaType } from 'src/app/models/ivaType';
import { CountryService } from 'src/app/services/countryService/country.service';
import { ProvinceService } from 'src/app/services/provinceService/province.service';
import { SupplierRequestDTO } from 'src/app/models/supplierRequestDTO';
import { SupplierDTOUtils } from 'src/app/utils/supplierDTO';
import { CategoryService } from 'src/app/services/categoryService/category.service';

@Component({
  selector: 'app-form-supplier',
  templateUrl: './form-supplier.component.html',
  styleUrls: ['./form-supplier.component.css']
})
export class FormSupplierComponent implements OnInit {

  supplier: SupplierRequestDTO = SupplierDTOUtils.initializeSupplierDTO();
  countries: Country[] = [];
  provinces: Province[] = [];
  fields: Field[] = [];
  ivaList: IvaType[] = [];
  filteredProvinces: Province[] = [];
  selectedCountry: Country | null = null;
  field: Field = {
    name: ''
  }

  constructor(public serviceSupplier: SupplierServiceService, public serviceField: FieldService, public serviceIva: IvaService,
              public serviceCountry: CountryService, public serviceProvince: ProvinceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFields();

    this.serviceIva.getIvaConditions().subscribe((data) => {
      this.ivaList = data;
      console.log(this.ivaList);
    },
      (error) => {
        console.error('Error:', error);
      });

    this.serviceCountry.getCountries().subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    },
      (error) => {
        console.error('Error:', error);
      });

    this.serviceProvince.getProvinces().subscribe((data) => {
      this.provinces = data;
      console.log(this.provinces);
    },
      (error) => {
        console.error('Error:', error);
      });
  }

  public getFields(){
    this.serviceField.getFields().subscribe((data) => {
      this.fields = data;
      console.log(this.fields);
    },
      (error) => {
        console.error('Error:', error);
      });
  }

  createSupplier(formData: NgForm) {
    console.log(formData.value);
    if (!formData.valid) {
      console.log("Formulario inválido.");
      return;
    }

    this.serviceSupplier.createSupplier(formData).subscribe((data: Supplier) => {
      console.log("Proveedor creado:", data);
      this.router.navigate(['/supplier-list'])
    });
  }


  addField() {
    if (this.field.name.trim() !== '') {
      this.serviceField.createField(this.field).subscribe(
        response => {
          console.log('Nuevo rubro agregado:', response);
          this.fields.push(response)
        },
        error => {
          console.error('Error al agregar rubro:', error);
        }
      );
    }
  }

  onCountryChange(): void {
    console.log('País seleccionado:', this.supplier.address.country_id);
    console.log('Todas las provincias:', this.provinces);
    const selectedCountryId = this.supplier.address.country_id;

    if (selectedCountryId != -1) {
      console.log('ID del país seleccionado:', selectedCountryId);

      // Filtrar las provincias por el ID del país seleccionado
      this.filteredProvinces = this.provinces.filter(province => province.country.id === selectedCountryId);
      console.log('Provincias filtradas:', this.filteredProvinces);
    } else {
      // Si no hay país seleccionado, reiniciar la lista de provincias filtradas
      this.filteredProvinces = [];
    }
  }

}


