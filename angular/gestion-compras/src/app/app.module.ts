import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/shared/main/main.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormProductComponent } from './products/form-product/form-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormSupplierComponent } from './suppliers/form-supplier/form-supplier.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { PurchaseOrderListComponent } from './purchase-orders/purchase-order-list/purchase-order-list.component';
import { FormPurchaseOrderComponent } from './purchase-orders/form-purchase-order/form-purchase-order.component';
import { ListComponent } from './purchase-orders/list/list.component';
import { DetailOrderComponent } from './purchase-orders/detail-order/detail-order.component';
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { HomeComponent } from './components/shared/home/home.component';
import { DetailSupplierComponent } from './suppliers/detail-supplier/detail-supplier.component';
import { LoginComponent } from './components/login/login.component';

import { ProductServiceService } from './services/product-service/product-service.service';
import { SupplierServiceService } from './services/supplier-service/supplier-service.service';
import { PurchaseOrderServiceService } from './services/purchase-order-service/purchase-order-service.service';

import { OrderStatusPipe } from './pipes/order-status.pipe';
import { ActiveProductPipe } from './pipes/active-product.pipe';
import { ActiveSupplierPipe } from './pipes/active-supplier.pipe';
import { ActiveOrderPipe } from './pipes/active-order.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { FormCategoryComponent } from './categories/category/form-category.component';
import { ActiveCategoryPipe } from './pipes/active-category.pipe';
import { SearchSupplierPipe } from './pipes/search-supplier.pipe';
import { SortByNamePipe } from './pipes/sort-by-name.pipe';
import { FormFieldComponent } from './fields/form-field/form-field.component';
import { FieldListComponent } from './fields/field-list/field-list.component';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { SortSuppliersPipe } from './pipes/sort-suppliers.pipe';
import { SortOrdersByNumberPipe } from './pipes/sort-orders-by-number.pipe';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { OrdersComponent } from './purchase-orders/orders.component';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,

    //Productos
    FormProductComponent,
    ProductListComponent,
    DetailProductComponent,
    ProductsComponent,

    //Proveedores
    FormSupplierComponent,
    SupplierListComponent,
    DetailSupplierComponent,
    SuppliersComponent,

    //Ordenes de compra
    PurchaseOrderListComponent,
    FormPurchaseOrderComponent,
    ListComponent,
    DetailOrderComponent,
    
    //Otros componentes
    CategoryListComponent,
    FormCategoryComponent,
    HomeComponent,
    LoginComponent,    

    //Pipes
    OrderStatusPipe,
    ActiveProductPipe,
    ActiveSupplierPipe,
    ActiveOrderPipe,
    CategoryPipe,
    SearchPipe,
    ActiveCategoryPipe,
    SearchSupplierPipe,
    SortByNamePipe,
    FormFieldComponent,
    FieldListComponent,
    SortProductsPipe,
    SortSuppliersPipe,
    SortOrdersByNumberPipe,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BreadcrumbModule
  ],
  providers: [
    ProductServiceService,
    SupplierServiceService,
    PurchaseOrderServiceService,
    ActiveOrderPipe,
    CategoryPipe,
    ActiveProductPipe,
    ActiveSupplierPipe,
    SearchPipe,
    BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
