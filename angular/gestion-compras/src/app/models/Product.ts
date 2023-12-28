import { Category } from "./category";
import { Supplier } from "./supplier";

export interface Product {
    id: number;
    sku: string;
    supplier: Supplier;
    category: Category;
    name: String;
    description: String;
    price: number;
    image: String;
}