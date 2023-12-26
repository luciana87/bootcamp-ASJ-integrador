import { Product } from "../models/product";

export class ProductUtils {

    static initializeProduct(): Product {
        return {
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
        }
    }
}
