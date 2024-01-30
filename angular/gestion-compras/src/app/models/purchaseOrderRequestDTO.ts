export interface PurchaseOrderDTO {

    num_order: number,
    created_at: Date,
    deadline: Date,
    canceled: boolean,
    total: number,
    description: String,
    supplier_id: number,
    product_id: number,

}