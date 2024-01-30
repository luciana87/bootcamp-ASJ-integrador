import { Country } from "./country";
import { Province } from "./province";

export interface AddressDTO {
    street: String,
    num: number,
    postal_code: String,
    city: String,
    province_id: number,
    country_id:number
}