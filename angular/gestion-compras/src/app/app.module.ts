import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

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

import { ProductServiceService } from './services/product-service/product-service.service';
import { SupplierServiceService } from './services/supplier-service/supplier-service.service';
import { PurchaseOrderServiceService } from './services/purchase-order-service/purchase-order-service.service';
import { ListComponent } from './purchase-orders/list/list.component';
import { DetailOrderComponent } from './purchase-orders/detail-order/detail-order.component';
import { DetailProductComponent } from './products/detail-product/detail-product.component';
import { HomeComponent } from './components/shared/home/home.component';
import { DetailSupplierComponent } from './suppliers/detail-supplier/detail-supplier.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderStatusPipe } from './pipes/order-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,

    //Productos
    FormProductComponent,
    ProductListComponent,

    //Proveedores
    FormSupplierComponent,
    SupplierListComponent,

    //Ordenes de compra
    PurchaseOrderListComponent,
    FormPurchaseOrderComponent,
    ListComponent,
    DetailOrderComponent,
    DetailProductComponent,
    HomeComponent,
    DetailSupplierComponent,
    LoginComponent,
    OrderStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductServiceService,SupplierServiceService,PurchaseOrderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
