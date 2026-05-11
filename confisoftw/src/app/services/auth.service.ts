import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usuarioActual: any = null;

  usuarios = [

    {
      usuario: 'admin',
      password: '1234',
      rol: 'admin'
    },

    {
      usuario: 'usuario',
      password: '1234',
      rol: 'usuario'
    }

  ];

  login(usuario: string, password: string){

    const encontrado = this.usuarios.find(

      u =>
        u.usuario === usuario &&
        u.password === password

    );

    if(encontrado){

      this.usuarioActual = encontrado;

      localStorage.setItem(
        'usuario',
        JSON.stringify(encontrado)
      );

      return true;

    }

    return false;

  }

  verificarLogin(){

    if(this.usuarioActual){

      return true;

    }

    const guardado =
      localStorage.getItem('usuario');

    if(guardado){

      this.usuarioActual =
        JSON.parse(guardado);

      return true;

    }

    return false;

  }

  logout(){

    this.usuarioActual = null;

    localStorage.removeItem('usuario');

  }

  esAdmin(){

    return this.usuarioActual?.rol === 'admin';

  }

}