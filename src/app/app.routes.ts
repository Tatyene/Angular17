import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ProductsService } from './shared/service/products.service';

export const routes: Routes = [

    { path: '', title: 'Home', loadComponent: () => import('./features/list/list.component').then(c => c.ListComponent) },

    { path: 'create-product', title: 'Criar Produto', loadComponent: () => import('./features/create/create.component').then(c => c.CreateComponent) },

    {
        path: 'edit-product/:id', title: 'Editar',
        resolve: {
            product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                const productsService = inject(ProductsService);
                return productsService.get(route.paramMap.get('id') as string)
            },
        },
        loadComponent: () => import('./features/edit/edit.component').then(c => c.EditComponent)
    }
];
