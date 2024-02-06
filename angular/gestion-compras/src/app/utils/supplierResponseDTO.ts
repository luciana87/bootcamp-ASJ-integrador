
import { SupplierResponseDTO } from "../models/supplierResponseDTO";

export class SupplierResponseDTOUtils {

    static initializeSupplierResponseDTO(): SupplierResponseDTO {
        return {
            id: -1,
            code: '',
            business_name: '',
            cuit:'',
            field_name: '',
            website: '',
            phone_number: '',
            email: '',
            address: {
                street: '',
                num: 0,
                postal_code: '',
                city: '',
                province_name: '',
                country_name: ''
            },
            iva_name: '',
            contact: {
                contact_name: '',
                contact_lastname: '',
                phone_number: 0,
                email: '',
                position: ''
            },
            logo: '',
            created_at: new Date,
            updated_at: new Date,
            deleted: false
        };
    }
}