import { Injectable } from '@angular/core';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ItemDetailResponseDTO } from 'src/app/models/itemDetailResponseDTO';
import { PurchaseOrderResponseDTO } from 'src/app/models/purchaseOrderResponseDTO';
import { Product } from 'src/app/models/product';



@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderServiceService {


  constructor(private http: HttpClient) {
  }

  private readonly baseUrl = "http://localhost:8080/purchase-orders";

getPurchaseOrders(): Observable<PurchaseOrderResponseDTO[]> {
  const headers = { 'Content-Type': 'application/json' };
  return this.http.get<PurchaseOrderResponseDTO[]>(this.baseUrl, { headers });

}

getOrderById(id: number): Observable<PurchaseOrderResponseDTO>{
  const headers = { 'Content-Type': 'application/json' };
  return this.http.get<PurchaseOrderResponseDTO>(this.baseUrl + '/' + id, { headers });
}

public getPurchaseOrderDetails(): Observable<ItemDetailResponseDTO[]>{
  const headers = { 'Content-Type': 'application/json' };
  return this.http.get<ItemDetailResponseDTO[]>(this.baseUrl, { headers })
}

createOrder (formData: NgForm): Observable<PurchaseOrder> {
  const headers = { 'Content-Type': 'application/json' };
  console.log("service");
  console.log(formData);
  const orderData = formData.value;
  return this.http.post<PurchaseOrder>(this.baseUrl,orderData, { headers });
}

updateOrder (order: PurchaseOrder) {
  //   let orders = this.getPurchaseOrders();
  //   let index = orders.findIndex(o => o.id === order.id);
  //   orders[index] = order;
  //   localStorage.setItem('orders', JSON.stringify(orders));

}

deleteOrder (id: number): Observable<PurchaseOrder> {
  return this.http.delete<PurchaseOrder>(this.baseUrl + '/' + id);
}

defaultImage(event: Event) {
  (event.target as HTMLImageElement).src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
}
}
