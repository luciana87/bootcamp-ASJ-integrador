import { Supplier } from "../models/supplier"
import { SupplierRequestDTO } from "../models/supplierRequestDTO"

export class SupplierRequestDTOUtils {

    static initializeSupplierDTO(): SupplierRequestDTO {
        return {
            code: '',
            business_name: '',
            cuit:'',
            field_id: -1,
            website: '',
            phone_number: '',
            email: '',
            iva_id: -1,
            logo: '',
            address: {
                street: '',
                num: 0,
                postal_code: '',
                city: '',
                province_id: -1,
                country_id: -1
            },
            contact: {
                contact_name: '',
                contact_lastname: '',
                phone_number: 0,
                email: '',
                position: ''

            }
        };
    }
}