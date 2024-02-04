import { PurchaseOrderRequestDTO } from "../models/purchaseOrderRequestDTO"
import { ProductUtils } from "./product"

export class PurcharseOrderRequestDTOUtils {

    static initializePurchaseOrderRequestDTO(): PurchaseOrderRequestDTO {
        return{ 
            num_order: 0,
            created_at: new Date,
            deadline: new Date,
            total: 0,
            description: '',
            supplier_id: -1,
            items: []
        }
    }
}