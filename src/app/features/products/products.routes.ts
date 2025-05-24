import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Product List'
  },
  {
    path: 'create',
    loadComponent: () => import('./create-product/create-product.component').then(m => m.CreateProductComponent),
    title: 'Create Product',
  },
  {
    path: ':id',
    loadComponent: () => import('./product-details/product-details.component').then(m => m.ProductDetailsComponent),
    title: 'Product Detail',
  }
];
