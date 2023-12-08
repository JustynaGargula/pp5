import { Routes } from '@angular/router';
import { CustomerFormComponent } from './invoice/components/customer-form/customer-form.component';
import { ProductFormComponent } from './product/product-form/product-form.component';

export const routes: Routes = [
    { path: 'invoice', 
    loadChildren: () => import('./invoice/invoice-routing.module').then(m => m.InvoiceRoutingModule)}
];
