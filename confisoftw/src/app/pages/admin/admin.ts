import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Navbar } from '../../components/navbar/navbar';

import { ProductosService } from '../../services/productos';

import { UsuariosService } from '../../services/usuario';

import { AuthService } from '../../services/auth.service';

import Chart from 'chart.js/auto';

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

export class Admin implements OnInit {

  usuarios: any[] = [];

  productos: any[] = [];

  nombre = '';

  precio = 0;

  categoria = '';

  stock = 0;

  imagen = '';

  constructor(

    public auth: AuthService,

    public usuariosService: UsuariosService,

    public productosService: ProductosService

  ){

    this.usuarios =
    this.usuariosService.obtenerUsuarios();

    this.productos =
    this.productosService.obtenerProductos();

  }

  agregarProducto(){

    this.productosService.agregarProducto({

      nombre: this.nombre,

      precio: this.precio,

      categoria: this.categoria,

      stock: this.stock,

      vendidos: 0,

      imagen: this.imagen

    });

    this.productos =
    this.productosService.obtenerProductos();

    this.nombre = '';

    this.precio = 0;

    this.categoria = '';

    this.stock = 0;

    this.imagen = '';

  }

  ngOnInit(){

    new Chart(

      'graficaVentas',

      {

        type: 'bar',

        data: {

          labels:
          this.productos.map(

            (p: any) => p.nombre

          ),

          datasets: [

            {

              label:
              'Productos Vendidos',

              data:
              this.productos.map(

                (p: any) => p.vendidos

              )

            }

          ]

        }

      }

    );

  }

}