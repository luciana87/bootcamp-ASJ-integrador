import { PurchaseOrder } from "../models/purchaseOrder"


export class OrderUtils {

    static initializeOrder(): PurchaseOrder {
        return {
            id: -1,
            numOrder: 0,
            supplier: {
                id: -1,
                code: '',
                businessName: '',
                cuit: '',
                field: {
                    id: -1,
                    name: ''
                },
                website: '',
                phoneNumber: '',
                email: '',
                address: {
                    id: -1,
                    street: '',
                    num: -1,
                    postalCode: '',
                    city: '',
                    province: {
                        id: -1,
                        name: '',
                        country: {
                            id: -1,
                            name: ''
                        }
                    },
                },
                iva: {
                    id: -1,
                    name: ''
                },
                contact: {
                    id: -1,
                    contactName: '',
                    contactLastname: '',
                    phoneNumber: 0,
                    email: '',
                    position: ''
                },
                logo: '',
                createdAt: new Date("2024-01-09"),
                updatedAt: new Date("2024-01-25"),
                deleted: false
            },
            createdAt: new Date("2024-01-18"),
            updatedAt: new Date("2024-01-20"),
            deadline: new Date("2024-01-28"),
            canceled: false,
            items: [],
            total: 0,
            description: ''
        }
    }
}