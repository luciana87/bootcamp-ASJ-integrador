import { ItemPurchaseOrder } from "./itemPurchaseOrder";
import { Product } from "./product";
import { Supplier } from "./supplier";

export interface PurchaseOrder {

    id: number
    num_order: number,
    supplier: Supplier,
    issue_date: Date,
    deadline: Date,
    total: number,
    items: ItemPurchaseOrder[],
    description: String

}