import { Routes } from '@angular/router';
import { getProducts } from './shared/resolvers/get-products.revolver';
import { getProduct } from './shared/resolvers/get-product-revolver';

export const routes: Routes = [

    { path: '', title: 'Home', 
        resolve: {
            products: getProducts
        },
        loadComponent: () => import('./features/list/list.component').then(c => c.ListComponent) },

    { path: 'create-product', title: 'Criar Produto', loadComponent: () => import('./features/create/create.component').then(c => c.CreateComponent) },

    {
        path: 'edit-product/:id', title: 'Editar',
        resolve: {
            product: getProduct
        },
        loadComponent: () => import('./features/edit/edit.component').then(c => c.EditComponent)
    }
];
