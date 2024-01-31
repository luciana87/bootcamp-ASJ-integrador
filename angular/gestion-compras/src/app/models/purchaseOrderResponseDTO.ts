import { ItemDetailResponseDTO } from "./itemDetailResponseDTO";

export interface PurchaseOrderResponseDTO {

    id: number
    num_order: number,
    created_at: Date,
    updated_at: Date,
    deadline: Date,
    canceled: boolean,
    total: number,
    description: String,
    supplier_name: String,
    items: ItemDetailResponseDTO[]
}