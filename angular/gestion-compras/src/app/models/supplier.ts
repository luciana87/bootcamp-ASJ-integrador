import { Address } from "./address"
import { Contact } from "./contact"
import { Field } from "./field"
import { IvaType } from "./ivaType"

export interface Supplier {
    id: number,
    code: String,
    businessName: String,
    cuit: String,
    field: Field,
    website: String,
    phoneNumber: String,
    email: String,
    address: Address,
    iva: IvaType,
    contact: Contact,
    logo: String,
    createdAt: Date,
	updatedAt: Date,
    deleted: boolean
}