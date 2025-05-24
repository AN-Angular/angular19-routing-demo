import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
    },
    {
        path: 'products',
        loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES)
    },
    {
        path: 'users',
        loadChildren: () => import('./features/users/users.routes').then(m => m.USERS_ROUTES)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

// Use loadComponent() when:
// - You’re rendering just a single component
// - The component is standalone
// - You don’t need child routes

// Use loadChildren() when:
// - You need to group multiple child routes
// - You’re organizing a feature with many pages
// - You want to lazy-load a full route tree