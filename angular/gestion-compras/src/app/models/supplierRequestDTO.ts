
import { AddressRequestDTO } from "./addressRequestDTO"
import { ContactDTO } from "./contactDTO"

export interface SupplierRequestDTO {
    id?: number,
    code: String,
    business_name: String,
    cuit: String,
    field_id: number,
    website: String,
    phone_number: String,
    email: String,
    address: AddressRequestDTO,
    iva_id: number,
    contact: ContactDTO,
    logo: String
}