import { Product } from "./product";
import { PurchaseOrder } from "./purchaseOrder";

export interface ItemDetail {

    id: number,
    price: number,
    amount: number,
    total: number,
    product: Product,
    purchaseOrder: PurchaseOrder

}