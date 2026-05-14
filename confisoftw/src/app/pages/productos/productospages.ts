import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Navbar } from '../../components/navbar/navbar';

import { CarritoService } from '../../services/carrito';

import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-productos',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    Navbar
  ],

  templateUrl: './productos.html',

  styleUrl: './productos.css'
})

export class Productos {

  busqueda = '';

  productos: any[] = [];

  constructor(

    public carritoService: CarritoService,

    public productosService: ProductosService

  ){

    this.productos =
    this.productosService.obtenerProductos();

  }

  agregarAlCarrito(producto: any){

    this.carritoService
    .agregarProducto(producto);

  }

  productosFiltrados(){

    return this.productos.filter(

      producto =>

        producto.nombre
        .toLowerCase()

        .includes(

          this.busqueda.toLowerCase()

        )

    );

  }

}