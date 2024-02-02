import { Product } from "../models/product";

export class ProductUtils {

    static initializeProduct(): Product {
        return {
            id: -1,
            sku: '',
            supplier: {
                id: 0,
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
                    postalCode: '',
                    num: -1,
                    city: '',
                    province: {
                        id: -1,
                        name: '',
                        country: {
                            id: -1,
                            name: ''
                        }
                    }
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
                    contactEmail: '',
                    position: ''
                },
                logo: '',
                createdAt: new Date("2024-01-12"),
                updatedAt: new Date("2024-01-25"),
                deleted: false
            },
            category: {
                id: 0,
                name: '',
                createdAt: new Date("2024-01-04"),
                updatedAt: new Date("2024-01-25"),
                deleted: false
            },
            name: '',
            description: '',
            price: 0,
            image: '',
            createdAt: new Date("2024-01-14"),
            updatedAt: new Date("2024-01-25"),
            deleted: false
        }
    }
}
