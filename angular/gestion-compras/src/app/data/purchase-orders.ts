import { suppliers } from "./suppliers"
import { products } from "./products"

export const orders = [
    {
        id: 1,
        num_order: 65472514,
        supplier: suppliers[2],
        items: [
            {
                id:1,
                product: products[5],
                amount: 1,
                total: 152000,
            }

        ],
        issue_date: new Date('2023-10-25'),
        deadline: new Date("2024-04-10"),
        price: products[5].price,
        total: 152000,
        description: "Esto es una descripción"
    },
    {
        id: 2,
        num_order: 7895444,
        supplier: suppliers[0],
        items: [
            {
                id:1,
                product: products[2],
                amount: 1,
                total: 152000,
            },
            {
                id:2,
                product: products[3],
                amount: 1,
                total: 152000,
            }

        ],
        issue_date: new Date('2021-10-25'),
        deadline: new Date("2024-01-10"),
        total: 235999,
        description: "Esto es una descripción"
    }
]