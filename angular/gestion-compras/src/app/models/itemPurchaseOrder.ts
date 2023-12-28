import { Product } from "./product";

export interface ItemPurchaseOrder {

    id: number
    product: Product,
    amount: number,
    total: number,

}