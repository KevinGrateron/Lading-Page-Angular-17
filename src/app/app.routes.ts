import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "contact", component:ContactComponent},
    {path: "products", component:ProductsComponent},
    {path: "product/:id", component:ProductDetailsComponent},
    {path: "**", redirectTo:"", pathMatch:"full"},

];
