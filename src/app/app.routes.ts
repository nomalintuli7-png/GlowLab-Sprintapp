import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import {  LoginComponent } from './pages/login/login';
import { CartComponent } from './pages/cart/cart';
import { Contacts } from './pages/contacts/contacts';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [
     
  { path: '', component: Home },

  { path: 'products', component: ProductsComponent },

  { path: 'cart', component: CartComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'about', component: About },

  { path: 'contacts', component: Contacts }
];
