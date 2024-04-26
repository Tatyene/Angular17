import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', title: 'Home', loadComponent: () => import('./features/list/list.component').then(c=> c.ListComponent)},

    { path: 'create-product', title: 'Criar Produto', loadComponent: () => import('./features/create/create.component').then(c=> c.CreateComponent)},

    { path: 'edit-product', title: 'Editar', loadComponent: () => import('./features/edit/edit.component').then(c => c.EditComponent)}
];
