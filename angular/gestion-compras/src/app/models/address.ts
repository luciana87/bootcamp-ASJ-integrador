import { Country } from "./country";
import { Province } from "./province";

export interface Address {
    id?: number,
    street: String,
    num: number,
    postalCode: String,
    city: String,
    province: Province
}