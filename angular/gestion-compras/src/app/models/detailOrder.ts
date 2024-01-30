import { Product } from "./product";
import { PurchaseOrder } from "./purchaseOrder";

export interface DetailOrder {
    id: number,
    price: number,
    amount: number,
    total: number,
    product: Product,
    order: PurchaseOrder
}