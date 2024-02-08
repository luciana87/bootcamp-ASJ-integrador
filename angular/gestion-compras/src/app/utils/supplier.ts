import { Supplier } from "../models/supplier"
import { SupplierRequestDTO } from "../models/supplierRequestDTO"

export class SupplierUtils {

    static initializeSupplier(): Supplier {
        return {
            id: -1,
            code: '',
            businessName: '',
            cuit: '',
            field: {
                id: -1,
                name: '',
                deleted: false
            },
            website: '',
            phoneNumber: '',
            email: '',
            address: {
                id: -1,
                street: '',
                num: undefined,
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
                id:-1,
                contactName: '',
                contactLastname: '',
                phoneNumber: undefined,
                contactEmail: '',
                position: ''
            },
            logo: '',
            createdAt: new Date,
            updatedAt: new Date,
            deleted: false
        }
    }
}