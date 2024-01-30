import { Injectable } from '@angular/core';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderServiceService {


  constructor(private http: HttpClient) {
  }

  private readonly baseUrl = "http://localhost:8080/purchase-orders";

getPurchaseOrders(): Observable<PurchaseOrder[]> {
  const headers = { 'Content-Type': 'application/json' };
  return this.http.get<PurchaseOrder[]>(this.baseUrl, { headers });

}

getOrderById(id: number): Observable<Object>{
  return this.http.get(this.baseUrl + '/' + id);
}

createOrder (formData: NgForm): Observable<PurchaseOrder> {
  console.log("service");
  console.log(formData);
  const orderData = formData.value;
  return this.http.post<PurchaseOrder>(this.baseUrl,orderData);
}

updateOrder(order: PurchaseOrder) {
  //   let orders = this.getPurchaseOrders();
  //   let index = orders.findIndex(o => o.id === order.id);
  //   orders[index] = order;
  //   localStorage.setItem('orders', JSON.stringify(orders));

}

deleteOrder(order: PurchaseOrder){
  //   let orderList = this.getPurchaseOrders();
  //   const index = orderList.findIndex(o => o.id === order.id);
  //   if (index > -1) {
  //     orderList.splice(index, 1);
  //     localStorage.setItem('orders', JSON.stringify(orderList));

  //   }
}

defaultImage(event: Event) {
  (event.target as HTMLImageElement).src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
}
}
