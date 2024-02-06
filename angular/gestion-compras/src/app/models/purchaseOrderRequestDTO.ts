import { ItemDetailDTO } from "./itemDetailDTO";
import { Product } from "./product";

export interface PurchaseOrderRequestDTO {

    num_order: number,
    total: number,
    description: String,
    created_at: Date,
    deadline: Date,
    supplier_id: number,
    items: ItemDetailDTO[],

}