import { PurchaseOrderResponseDTO } from "../models/purchaseOrderResponseDTO"

export class PurcharseOrderResponseDTOUtils {

    static initializePurchaseOrderResponseDTO(): PurchaseOrderResponseDTO {
        return{ 
            id:-1,
            num_order: 0,
            created_at: new Date,
            updated_at: new Date,
            deadline: new Date,
            canceled: false,
            total: 0,
            description: '',
            supplier_name: '',
            items: []
        }
    }
}