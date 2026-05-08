import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-productos',
  imports: [Navbar],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

  constructor(
    private auth: Auth,
    private router: Router
  ){

    if(!this.auth.verificarLogin()){

      this.router.navigate(['/login']);

    }

  }

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
    },

    {
      nombre: 'Mouse Gamer',
      precio: 120000,
      imagen: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop'
    }

  ];

}