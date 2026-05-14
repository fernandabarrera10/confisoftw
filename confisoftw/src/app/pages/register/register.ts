import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';

import { UsuariosService } from '../../services/usuario';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    FormsModule,
    CommonModule,
    Navbar
  ],

  templateUrl: './register.html',

  styleUrls: ['./register.css']
})

export class Register {

  nombre = '';

  usuario = '';

  password = '';

  correo = '';

  telefono = '';

  constructor(

    public usuariosService: UsuariosService,

    private router: Router

  ){}

  registrar(){

    const nuevoUsuario = {

      nombre: this.nombre,

      usuario: this.usuario,

      password: this.password,

      correo: this.correo,

      telefono: this.telefono

    };

    this.usuariosService
    .agregarUsuario(nuevoUsuario);

    alert('Usuario registrado');

    this.router.navigate(['/login']);

  }

}