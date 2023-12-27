import { PurchaseOrder } from "../models/purchaseOrder"


export class OrderUtils {

    static initializeOrder(): PurchaseOrder {
        return {
            id: -1,
            num_order: 0,
            supplier: {
                id: -1,
                code: '',
                business_name: '',
                category: '',
                website: '',
                phone_number: 0,
                email: '',
                address: {
                    street: '',
                    postal_code: '',
                    city: '',
                    departament: '',
                    country: ''
                },
                tax_data: {
                    cuit: 0,
                    responsible_registered: ''
                },
                contact: {
                    name: '',
                    lastname: '',
                    phone_number: 0,
                    email: '',
                    rol: ''
                },
                logo: ''
            },
            issue_date: new Date,
            deadline: new Date,
            items: [],
            total: 0,
            description: ''
        }
    }
}