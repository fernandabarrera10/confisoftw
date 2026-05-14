import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';

import { UsuariosService } from '../../services/usuario';

@Component({
  selector: 'app-register',
  imports: [FormsModule, Navbar],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class Register {

  nombre = '';

  apellido = '';

  usuario = '';

  password = '';

  correo = '';

  telefono = '';

  constructor(
    public usuariosService: UsuariosService,
    private router: Router
  ){}

  registrar(){

    if(
      this.nombre === '' ||
      this.apellido === '' ||
      this.usuario === '' ||
      this.password === '' ||
      this.correo === '' ||
      this.telefono === ''
    ){

      alert('Completa todos los campos');
      return;

    }

    const existe =
      this.usuariosService.usuarios.find(
        (u: any) =>
          u.usuario === this.usuario
      );

    if(existe){

      alert('El usuario ya existe');
      return;

    }

    const nuevoUsuario = {

      nombre:
        this.nombre + ' ' + this.apellido,

      usuario: this.usuario,

      password: this.password,

      correo: this.correo,

      telefono: this.telefono,

      rol: 'usuario',

      estado: 'Activo',

      pedidos: 0,

      compras: 0,

      foto:
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'

    };

    this.usuariosService
      .agregarUsuario(nuevoUsuario);

    alert('Cuenta creada correctamente');

    this.router.navigate(['/login']);

  }

}