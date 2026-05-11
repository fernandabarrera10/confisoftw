import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-admin',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    Navbar
  ],

  templateUrl: './admin.html',

  styleUrls: ['./admin.css']
})

export class Admin {

  nombre = '';

  precio = 0;

  imagen = '';

  productos: any[] = [];

  agregarProducto(){

    this.productos.push({

      nombre: this.nombre,

      precio: this.precio,

      imagen: this.imagen

    });

    this.nombre = '';
    this.precio = 0;
    this.imagen = '';

  }

}