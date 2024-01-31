import { Country } from "./country";
import { Province } from "./province";

export interface AddressRequestDTO {
    street: String,
    num: number,
    postal_code: String,
    city: String,
    province_id: number,
    country_id:number
}