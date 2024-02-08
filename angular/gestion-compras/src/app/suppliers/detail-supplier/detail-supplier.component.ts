import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierResponseDTO } from 'src/app/models/supplierResponseDTO';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { SupplierResponseDTOUtils } from 'src/app/utils/supplierResponseDTO';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.css']
})
export class DetailSupplierComponent implements OnInit {

  supplier: SupplierResponseDTO = SupplierResponseDTOUtils.initializeSupplierResponseDTO();
  id: number = -1;
  constructor(public serviceSupplier: SupplierServiceService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    this.route.paramMap.subscribe((param: any) => {
      const idString = param.get('id');
      if (idString) {
        this.id = +idString; //Convierte de cadena a numero
        this.serviceSupplier.getSupplierDetailById(this.id).subscribe(
          (data) => {
            this.supplier = data;
            console.log(this.supplier);
          });
      }
    });
  }

  goBack() {
    this.router.navigate(['/suppliers']);
    }

    defaultImage(event: Event) {
      this.serviceSupplier.defaultImage(event);
    }

}
