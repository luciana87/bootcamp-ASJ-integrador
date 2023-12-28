import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierServiceService } from 'src/app/services/supplier-service/supplier-service.service';
import { SupplierUtils } from 'src/app/utils/supplier';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.css']
})
export class DetailSupplierComponent implements OnInit {

  supplier!: Supplier;

  constructor(public service: SupplierServiceService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: any) => {
      const id = param.get('id');

      if (id) {
        this.supplier = this.service.getSupplierById(parseInt(id)) || SupplierUtils.initializeSupplier();
      }

    })
  }

  goBack() {
    this.router.navigate(['/supplier-list']);
    }


}
