import { Supplier } from "../models/supplier"

export class SupplierUtils {
    
    static initializeSupplier(): Supplier {
        return {
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
        }
    }
}