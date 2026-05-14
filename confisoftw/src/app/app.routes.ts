import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';

import { Login } from './pages/login/login';

import { Register } from './pages/register/register';

import { Perfil } from './pages/perfil/perfil';

import { Productos } from './pages/productos/productospages';

import { Carrito } from './pages/carrito/carrito';

import { authGuard } from './guards/auth-guard';

import { Admin } from './pages/admin/admin';

import { Pedidos } from './pages/pedidos/pedidos';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'perfil',
    component: Perfil,
    canActivate: [authGuard]
  },

  {
    path: 'productos',
    component: Productos,
    canActivate: [authGuard]
  },

  {
    path: 'carrito',
    component: Carrito,
    canActivate: [authGuard]
  },

  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard]
  },

  {
    path: 'pedidos',
    component: Pedidos,
    canActivate: [authGuard]
  }

];