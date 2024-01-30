import { Category } from "./category";
import { Supplier } from "./supplier";

export interface Product {
    id: number;
    name: string;
    sku: string;
    price: number;
    description: string;
    image: string;
    supplier: Supplier;
    createdAt: Date | string; // Puede ser Date o string
    updatedAt: Date | string; // Puede ser Date o string
    deleted: boolean;
    category: Category;
}