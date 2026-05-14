import { Component }
from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Navbar }from '../../components/navbar/navbar';

import { CarritoService }from '../../services/carrito';

import { PedidosService } from '../../services/pedidos';

import { ProductosService } from '../../services/productos';

import { AuthService } from '../../services/auth.service';

import jsPDF from 'jspdf';

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

    public carritoService:
    CarritoService,

    public pedidosService:PedidosService,

    public productosService:ProductosService,

    public auth:
    AuthService

  ){}

  aumentar(producto: any){

    this.carritoService
    .aumentarCantidad(producto);

  }

  disminuir(producto: any){

    this.carritoService
    .disminuirCantidad(producto);

  }

  finalizarCompra(){

    const pedido = {

      usuario:
      this.auth.usuarioActual?.email,

      productos:
      [...this.carritoService.carrito],

      total:
      this.carritoService.total(),

      fecha:
      new Date()

    };
    

    // 🔥 GUARDAR PEDIDO

    this.pedidosService.guardarPedido(pedido);

    // 🔥 DISMINUIR STOCK

    this.carritoService.carrito
    .forEach((producto: any) => {

      for(

        let i = 0;

        i < producto.cantidad;

        i++

      ){

        this.productosService
        .disminuirStock(producto);

      }

    });

    // 🔥 WHATSAPP

    let mensaje =

    '🛒 *CONFISOFTW* %0A%0A';

    mensaje +=

    '*FACTURA DE COMPRA* %0A%0A';

    this.carritoService.carrito
    .forEach((producto: any) => {

      mensaje +=

      `• ${producto.nombre}
      x${producto.cantidad}
      - $
      ${producto.precio *
      producto.cantidad}%0A`;

    });

    mensaje +=

    `%0A💰 *TOTAL:* $
    ${this.carritoService.total()}`;

    window.open(

      `https://wa.me/573503516508?text=${mensaje}`,

      '_blank'

    );

    // 🔥 PDF FACTURA

    const pdf = new jsPDF();

    pdf.setFontSize(22);

    pdf.text(
      'CONFISOFTW FACTURA',
      20,
      20
    );

    pdf.setFontSize(14);

    pdf.text(

      `Cliente:
      ${this.auth.usuarioActual?.email}`,

      20,
      40

    );

    let y = 60;

    this.carritoService.carrito
    .forEach((producto: any) => {

      pdf.text(

        `${producto.nombre}
        x${producto.cantidad}
        - $
        ${producto.precio *
        producto.cantidad}`,

        20,
        y

      );

      y += 10;

    });

    pdf.text(

      `TOTAL:
      $
      ${this.carritoService.total()}`,

      20,
      y + 20

    );

    // 🔥 LOGO

    // CAMBIA ESTA URL
    // POR TU LOGO

    const logo =

    'AQUI_TU_URL_LOGO';

    // 🔥 DESCARGAR PDF

    pdf.save(
      'factura-confisoftw.pdf'
    );

    // 🔥 CORREO

    const asunto =

    'Factura CONFISOFTW';

    const cuerpo =

    `Hola,
    gracias por tu compra.

    Total:
    $
    ${this.carritoService.total()}`;

    window.open(

      `mailto:${this.auth.usuarioActual?.email}
      ?subject=${asunto}
      &body=${cuerpo}`

    );

    alert(
      'Compra realizada correctamente'
    );

    // 🔥 LIMPIAR

    this.carritoService
    .limpiarCarrito();

  }

}