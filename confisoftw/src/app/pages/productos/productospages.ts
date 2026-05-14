import { Injectable }
from '@angular/core';

import { CarritoService } from '../../services/carrito';

import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Navbar } from '../../components/navbar/navbar';

import { ProductosService } from '../../services/productos';

@Component({
  selector: 'app-productos',

  standalone: true,

  imports: [
    CommonModule,
    Navbar
  ],

  templateUrl: './productos.html',

  styleUrl: './productos.css'
})

export class Productos implements OnInit {

  productos: any[] = [];

  constructor(

    public carritoService: CarritoService,

    public productosService: ProductosService

  ){}

  ngOnInit(){

    this.productos =
    this.productosService.obtenerProductos();

  }

  agregarAlCarrito(producto: any){

    this.carritoService
    .agregarProducto(producto);

  }

}