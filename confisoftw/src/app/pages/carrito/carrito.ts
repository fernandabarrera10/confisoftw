import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Navbar } from '../../components/navbar/navbar';

import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',

  standalone: true,

  imports: [
    CommonModule,
    Navbar
  ],

  templateUrl: './carrito.html',

  styleUrl: './carrito.css'
})

export class Carrito {

  constructor(
    public carritoService: CarritoService
  ){}

  aumentar(producto: any){

    this.carritoService.aumentarCantidad(producto);

  }

  disminuir(producto: any){

    this.carritoService.disminuirCantidad(producto);

  }

  finalizarCompra(){

    let mensaje = '🛒 *CONFISOFTW* %0A%0A';

    mensaje += '*Productos Comprados:* %0A%0A';

   this.carritoService.carrito.forEach((producto: any) => {

  mensaje += `• ${producto.nombre} x${producto.cantidad} - $${producto.precio * producto.cantidad}%0A`;

});

    mensaje += `%0A💰 *Total:* $${this.carritoService.total()}`;

    const telefono = '573503516508';

    window.open(
      `https://wa.me/${telefono}?text=${mensaje}`,
      '_blank'
    );

  }

}