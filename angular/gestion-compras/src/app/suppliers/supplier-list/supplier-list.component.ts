import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent {

  supplierList: {code:String, business_name: String, category: String, cuit: String, address: {street: String, num: number, postal_code: String, city: String, departament: String, country: String}}[]=[];

}
