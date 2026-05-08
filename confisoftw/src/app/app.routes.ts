import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register} from './pages/register/register';
import { Perfil } from './pages/perfil/perfil';
import { Productos } from './pages/productos/productos';

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
    component: Perfil
  },

  {
    path: 'productos',
    component: Productos
  }

];