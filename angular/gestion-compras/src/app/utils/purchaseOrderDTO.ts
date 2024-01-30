import { PurchaseOrderDTO } from "../models/PurchaseOrderRequestDTO"

export class PurcharseOrderDTOUtils {

    static initializePurchaseOrderDTO(): PurchaseOrderDTO {
        return{ 
            num_order: 0,
            created_at: new Date,
            deadline: new Date,
            canceled: false,
            total: 0,
            description: '',
            supplier_id: -1,
            product_id: -1
        }
    }
}