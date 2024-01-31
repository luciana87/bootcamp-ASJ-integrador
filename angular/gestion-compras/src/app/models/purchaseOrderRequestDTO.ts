export interface PurchaseOrderRequestDTO {

    num_order: number,
    total: number,
    description: String,
    created_at: Date,
    deadline: Date,
    supplier_id: number,
    product_id: number,

}