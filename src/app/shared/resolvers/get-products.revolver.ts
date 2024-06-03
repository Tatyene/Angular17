import { inject } from "@angular/core";
import { ProductsService } from "../service/products.service";

export const getProducts = () => {
    const productsService = inject(ProductsService);
    return productsService.getAll();
}