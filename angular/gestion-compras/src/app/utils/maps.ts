
import { NgForm } from "@angular/forms";
import { AddressDTO } from "../models/addressDTO";
import { SupplierRequestDTO } from "../models/supplierRequestDTO";
import { PurchaseOrderDTO } from "../models/PurchaseOrderRequestDTO";

export class MapsUtils {

    static mapToSupplierDTO(data: NgForm): SupplierRequestDTO {

        return {
            code: data.value.code,
            business_name: data.value.business_name,
            cuit: data.value.cuit,
            field_id: data.value.field_id,
            website: data.value.website,
            phone_number: data.value.phone_number,
            email: data.value.email,
            iva_id: data.value.iva_id,
            logo: data.value.logo,
            address: {
                street: data.value.street,
                num: data.value.num,
                postal_code: data.value.postal_code,
                city: data.value.city,
                province_id: data.value.province_id,
                country_id: data.value.country_id
            },
            contact: {
                contact_name: data.value.contact_name,
                contact_lastname: data.value.contact_lastname,
                phone_number: data.value.phone_number,
                email: data.value.email,
                position: data.value.position

            }
        };
    }

    static mapToPurchaseOrderDTO(data: NgForm): PurchaseOrderDTO {

        return {
            num_order: data.value.num_order,
            created_at: data.value.created_at,
            deadline: data.value.deadline,
            canceled: false,
            total: data.value.total,
            description: data.value.description,
            supplier_id: data.value.supplier_id,
            product_id: data.value.product_id
        };
    }
}