import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Navbar } from '../../components/navbar/navbar';

import { AuthService }
from '../../services/auth.service';

import { UsuariosService }from '../../services/usuario';

@Component({
  selector: 'app-perfil',

  standalone: true,

  imports: [
    FormsModule,
    Navbar
  ],

  templateUrl: './perfil.html',

  styleUrls: ['./perfil.css']
})

export class Perfil {

  usuario: any;

  constructor(

    public auth: AuthService,

    public usuariosService:
    UsuariosService

  ){

    this.usuario =
      this.auth.usuarioActual;

  }

  guardarCambios(){

    this.usuariosService
    .actualizarUsuario(this.usuario);

    localStorage.setItem(

      'usuario',

      JSON.stringify(this.usuario)

    );

    alert(
      'Perfil actualizado'
    );

  }

}