import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './products/form-product/form-product.component';
import { FormSupplierComponent } from './suppliers/form-supplier/form-supplier.component';
import { FormPurchaseOrderComponent } from './purchase-orders/form-purchase-order/form-purchase-order.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { PurchaseOrderListComponent } from './purchase-orders/purchase-order-list/purchase-order-list.component';
import { ListComponent } from './purchase-orders/list/list.component';
import { DetailOrderComponent } from './purchase-orders/detail-order/detail-order.component';
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { HomeComponent } from './components/shared/home/home.component';
import { DetailSupplierComponent } from './suppliers/detail-supplier/detail-supplier.component';

const routes: Routes = [
  // {
  //   path: 'product-list',
  //   children: [{ path: '', component: ProductListComponent },
  //   { path: 'form-product', component: FormProductComponent }]
  // },
  { path: 'form-product', component: FormProductComponent},
  { path: 'form-product/:id', component: FormProductComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'form-supplier', component: FormSupplierComponent },
  { path: 'form-supplier/:id', component: FormSupplierComponent },
  { path: 'form-purchase-order', component: FormPurchaseOrderComponent },
  { path: 'form-purchase-order/:id', component: FormPurchaseOrderComponent },
  { path: 'list', component: ListComponent},
  { path: 'detail-order/:id', component: DetailOrderComponent},
  { path: 'detail-product/:id', component: DetailProductComponent},
  { path: 'detail-supplier/:id', component: DetailSupplierComponent},
  { path: 'supplier-list', component: SupplierListComponent },
  { path: 'purchase-order-list', component: PurchaseOrderListComponent },
  { path: '', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
