import { suppliers } from "./suppliers"
import { products } from "./products"

export const orders = [
    {
        num_order: 1,
        supplier: suppliers[2],
        product_name: products[5],
        issue_date: '25/10/2023',
        deadline: "29/01/2024",
        price: products[5].price,
        amount: 2,
        subtotal: 152000.00
    }
]