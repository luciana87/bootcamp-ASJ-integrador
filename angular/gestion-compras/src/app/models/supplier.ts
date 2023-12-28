import { Address } from "./address"
import { Contact } from "./contact"
import { TaxData } from "./taxData"

export interface Supplier {
    id: number,
    code: String,
    business_name: String,
    category: string,
    website: String,
    phone_number: number,
    email: String,
    address: Address,
    tax_data: TaxData,
    contact: Contact,
    logo: String
}