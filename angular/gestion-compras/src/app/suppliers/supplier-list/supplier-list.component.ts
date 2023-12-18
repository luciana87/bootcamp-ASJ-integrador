import { Component, OnInit } from '@angular/core';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers: [SupplierServiceService]
})
export class SupplierListComponent implements OnInit{

  // supplierList: {code:String, business_name: String, category: String, cuit: String, address: {street: String, num: number, postal_code: String, city: String, departament: String, country: String}}[]=[];

  supplierList: any[] = [];
  
  constructor(public service: SupplierServiceService){}

  ngOnInit(): void {
    this.supplierList = this.service.getSupplier();
  }
}
