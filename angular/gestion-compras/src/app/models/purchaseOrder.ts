import { Product } from "./product";
import { Supplier } from "./supplier";

export interface PurchaseOrder {

    id: number
    num_order: number,
    supplier: Supplier,
    product: Product,
    issue_date: Date,
    deadline: Date,
    price: number,
    amount: number,
    subtotal: number,
    description: String

}