
import { AddressResponseDTO } from "./addressResponseDTO";
import { ContactDTO } from "./contactDTO";

export interface SupplierResponseDTO {
    id: number,
    code: String,
    business_name: String,
    cuit: String,
    field_name: String,
    website: String,
    phone_number: String,
    email: String,
    address: AddressResponseDTO,
    iva_name: String,
    contact: ContactDTO,
    logo: String,
    created_at: Date,
    updated_at: Date,
    deleted: boolean
}