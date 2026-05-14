import { Injectable } from '@angular/core';

import { UsuariosService } from './usuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usuarioActual: any = null;

  constructor(

    public usuariosService:
    UsuariosService

  ){

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

    const encontrado =

    this.usuariosService.usuarios.find(

      (u: any) =>

        u.usuario === usuario &&

        u.password === password

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

    return this.usuarioActual != null;

  }

  esAdmin(){

    return this.usuarioActual?.rol === 'admin';

  }

  esUsuario(){

    return this.usuarioActual?.rol === 'usuario';

  }

}