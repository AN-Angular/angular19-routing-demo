import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

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
        loadChildren: () => import('./features/users/users.routes').then(m => m.USERS_ROUTES),
        canActivate: [authGuard]
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

// 📦 Summary of Best Practices
// Lazy Loading: Utilize loadChildren to lazy-load feature modules, improving initial load times.
// Standalone Components: Leverage standalone components for better modularity and reusability.
// Nested Routes: Structure nested routes within their respective feature modules for clarity.
// Route Guards: Implement guards like CanActivate to protect sensitive routes.
// Wildcard Routes: Define a wildcard route to handle undefined paths gracefully.
