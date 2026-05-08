import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  usuarios: Usuario[] = [

    {
      nombre: 'Admin',
      apellido: 'CONFISOFTW',
      correo: 'admin@gmail.com',
      telefono: '3000000000',
      usuario: 'admin',
      password: 'admin123',
      rol: 'admin'
    },

    {
      nombre: 'Fernanda',
      apellido: 'Barrera',
      correo: 'user@gmail.com',
      telefono: '3200000000',
      usuario: 'fernanda',
      password: '123456',
      rol: 'usuario'
    }

  ];

  usuarioActual: Usuario | null = null;

  constructor(){

    const usuarioGuardado =
      localStorage.getItem('usuarioActual');

    if(usuarioGuardado){

      this.usuarioActual =
        JSON.parse(usuarioGuardado);

    }

  }

  login(
    usuario: string,
    password: string
  ){

    const encontrado = this.usuarios.find(
      user =>
        user.usuario === usuario &&
        user.password === password
    );

    if(encontrado){

      this.usuarioActual = encontrado;

      localStorage.setItem(
        'usuarioActual',
        JSON.stringify(encontrado)
      );

      return true;

    }

    return false;

  }

  logout(){

    this.usuarioActual = null;

    localStorage.removeItem(
      'usuarioActual'
    );

  }

  verificarLogin(){

    return this.usuarioActual !== null;

  }

  esAdmin(){

    return this.usuarioActual?.rol === 'admin';

  }

}