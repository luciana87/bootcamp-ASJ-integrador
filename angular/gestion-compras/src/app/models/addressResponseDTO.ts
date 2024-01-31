import { Country } from "./country";
import { Province } from "./province";

export interface AddressResponseDTO {
    street: String,
    num: number,
    postal_code: String,
    city: String,
    province_name: String,
    country_name: String
}