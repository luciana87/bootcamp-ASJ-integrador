import { suppliers } from "./suppliers"
import { products } from "./products"

export const orders = [
    {
        id: 1,
        num_order: 6547,
        supplier: suppliers[2],
        product: products[5],
        issue_date: new Date('2023-10-25'),
        deadline: new Date("2024-04-10"),
        price: products[5].price,
        amount: 2,
        subtotal: 152000.00,
        description: "Esto es una descripción"
    },
    {
        id: 2,
        num_order: 7895,
        supplier: suppliers[0],
        product: products[2],
        issue_date: new Date('2021-10-25'),
        deadline: new Date("2024-01-10"),
        price: products[5].price,
        amount: 1,
        subtotal: 152000.00,
        description: "Esto es una descripción"
    }
]