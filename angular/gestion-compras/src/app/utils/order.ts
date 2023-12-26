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
            product: {
                id: -1,
                sku: '',
                supplier: {
                    id: 0,
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
                category: {
                    id: 0,
                    name: ''
                },
                name: '',
                description: '',
                price: 0,
                image: ''
            },
            issue_date: new Date,
            deadline: new Date,
            price: 0,
            amount: 0,
            subtotal: 0,
            description: ''
        }
    }
}