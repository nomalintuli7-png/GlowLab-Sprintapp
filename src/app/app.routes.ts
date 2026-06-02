import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { NewProducts } from './pages/new-products/new-products';
import { Login } from './pages/login/login';
import { Cart } from './pages/cart/cart';
import { Register } from './pages/register/register';
import { Contacts } from './pages/contacts/contacts';

export const routes: Routes = [
     
  { path: '', component: Home },

  { path: 'products', component: Products },

  { path: 'new-products', component:NewProducts },

  { path: 'cart', component: Cart },

  { path: 'login', component: Login },

  { path: 'register', component: Register },

  { path: 'about', component: About },

  { path: 'contacts', component: Contacts }
];
