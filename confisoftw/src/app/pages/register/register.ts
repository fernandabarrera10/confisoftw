import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-register',

  standalone: true,

  imports: [
    FormsModule,
    Navbar
  ],

  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class Register {

  nombre = '';
  apellido = '';
  correo = '';
  telefono = '';
  usuario = '';
  password = '';

  registrar(){

    console.log({
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      telefono: this.telefono,
      usuario: this.usuario,
      password: this.password
    });

    alert('Usuario registrado correctamente');

  }

}