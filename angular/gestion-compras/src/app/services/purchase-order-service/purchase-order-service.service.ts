import { Injectable } from '@angular/core';
import { PurchaseOrder } from 'src/app/models/purchaseOrder';
import { orders } from 'src/app/data/purchase-orders';


//const dataOrders: PurchaseOrder[] = orders;

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderServiceService {

  id!: number;

  constructor() {
    // let purchaseOrders = this.getPurchaseOrders(); // Le asigno lo que venga del localStorage
    // if (purchaseOrders.length === 0) { // Si está vacío el [], no hay elementos en el localStorage
    //   purchaseOrders = dataOrders; //Le asigno mi JSON
    //   localStorage.setItem("orders", JSON.stringify(dataOrders)) //Agrego al localStorage lo que tengo en mi JSON
    // }

    // let lastOrder = purchaseOrders[purchaseOrders.length -1]
    // this.id = lastOrder.id
  }

  // getPurchaseOrders(): PurchaseOrder[] {
  //   let orderList = localStorage.getItem('orders');
  //   return (orderList !== null) ? JSON.parse(orderList!) : [];
//}

getOrderById(id: number) {
  //   let orders = this.getPurchaseOrders();
  //   return orders.find((order) => order.id === id);
}

createOrder(order: PurchaseOrder) {
  //   this.id += 1;
  //   order.id = this.id;
  //   let orderList = this.getPurchaseOrders();
  //   orderList.push(order);
  //   localStorage.setItem('orders', JSON.stringify(orderList));

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
