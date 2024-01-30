
import { AddressDTO } from "./addressDTO"
import { ContactDTO } from "./contactDTO"

export interface SupplierRequestDTO {
    code: String,
    business_name: String,
    cuit: String,
    field_id: number,
    website: String,
    phone_number: String,
    email: String,
    address: AddressDTO,
    iva_id: number,
    contact: ContactDTO,
    logo: String
}