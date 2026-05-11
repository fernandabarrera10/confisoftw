import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Navbar } from '../../components/navbar/navbar';

import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-productos',

  standalone: true,

  imports: [
    CommonModule,
    Navbar
  ],

  templateUrl: './productos.html',

  styleUrls: ['./productos.css']
})

export class Productos {

  constructor(
    public carritoService: CarritoService
  ){}

  productos = [

    {
      nombre: 'Laptop Gamer',
      precio: 3500000,
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop'
    },

    {
      nombre: 'Audífonos',
      precio: 250000,
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    },

    {
      nombre: 'Teclado RGB',
      precio: 180000,
      imagen: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop'
    }

  ];

  agregarAlCarrito(producto: any){

    this.carritoService.agregarProducto(producto);

  }

  disminuir(producto: any){

    this.carritoService.disminuirCantidad(producto);

  }

  obtenerCantidad(producto: any){

    const encontrado =
      this.carritoService.carrito.find(

        (p: any) =>
          p.nombre === producto.nombre

      );

    return encontrado
      ? encontrado.cantidad
      : 0;

  }

}