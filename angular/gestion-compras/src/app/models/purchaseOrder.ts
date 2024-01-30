import { ItemDetail } from "./itemDetail";
import { Supplier } from "./supplier";

export interface PurchaseOrder {

    id: number
    numOrder: number,
    createdAt: Date,
    updatedAt: Date,
    deadline: Date,
    canceled: boolean,
    total: number,
    description: String,
    supplier: Supplier,
    items: ItemDetail[]
}