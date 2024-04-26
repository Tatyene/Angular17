import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', title: 'Home', loadComponent: () => import('./features/list/list.component').then(c=> c.ListComponent)},

    { path: 'create-product', title: 'Criar Produto', loadComponent: () => import('./features/create/create.component').then(c=> c.CreateComponent)}
];
