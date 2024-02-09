
import { CategoryRequestDTO } from "../models/categoryRequestDTO";

export class CategoryUtils {

    static initializeCategory(): CategoryRequestDTO {
        return {
            id:-1,
            name: ''
        }
    }
}