import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './products/form-product/form-product.component';
import { FormSupplierComponent } from './suppliers/form-supplier/form-supplier.component';
import { FormPurchaseOrderComponent } from './purchase-orders/form-purchase-order/form-purchase-order.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { PurchaseOrderListComponent } from './purchase-orders/purchase-order-list/purchase-order-list.component';
import { DetailOrderComponent } from './purchase-orders/detail-order/detail-order.component';
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { HomeComponent } from './components/shared/home/home.component';
import { DetailSupplierComponent } from './suppliers/detail-supplier/detail-supplier.component';
import { LoginComponent } from './components/login/login.component';
import { FormCategoryComponent } from './categories/category/form-category.component';
import { FormFieldComponent } from './fields/form-field/form-field.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { OrdersComponent } from './purchase-orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { breadcrumb: 'Productos' },
    children: [
      {
        path: '',
        component: ProductListComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'detail/:id',
        component: DetailProductComponent,
        data: { breadcrumb: 'Detalle' },
      },
      {
        path: 'edit/:id',
        component: FormProductComponent,
        data: { breadcrumb: 'Editar' },
      },
      {
        path: 'create',
        component: FormProductComponent,
        data: { breadcrumb: 'Crear' },
      }
    ]
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    data: { breadcrumb: 'Proveedores' },
    children: [
      {
        path: '',
        component: SupplierListComponent,
        data: { breadcrumb: '' },
      },
      {
        path: 'detail/:id',
        component: DetailSupplierComponent,
        data: { breadcrumb: 'Detalle' },
      },
      {
        path: 'edit/:id',
        component: FormSupplierComponent,
        data: { breadcrumb: 'Editar' }
      },
      {
        path: 'create',
        component: FormSupplierComponent,
        data: { breadcrumb: 'Crear' }
      }
    ]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    data: { breadcrumb: 'Órdenes' },
    children: [
      {
        path: '',
        component: PurchaseOrderListComponent,
        data: { breadcrumb: '' }
      },
      {
        path: 'detail/:id',
        component: DetailOrderComponent,
        data: { breadcrumb: 'Detalle' },
      },
      {
        path: 'create',
        component: FormPurchaseOrderComponent,
        data: { breadcrumb: 'Crear' },
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'categories',
    component: FormCategoryComponent,
    data: { breadcrumb: 'Categorías' },
  },
  {
    path: 'fields',
    component: FormFieldComponent,
    data: { breadcrumb: 'Rubros' },
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
