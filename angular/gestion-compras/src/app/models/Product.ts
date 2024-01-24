import { Category } from "./category";
import { Supplier } from "./supplier";

export interface Product {
    id: number;
    sku: string;
    supplier: Supplier;
    category: {
        id: number;
        name: string;
        created_at: Date | string; // Puede ser Date o string
        updated_at: Date | string; // Puede ser Date o string
        isDeleted: boolean;
    };
    name: string;
    description: string;
    price: number;
    image: string;
}