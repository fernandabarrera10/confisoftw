import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-pedidos',

  standalone: true,

  imports: [
    CommonModule,
    Navbar
  ],

  templateUrl: './pedidos.html',

  styleUrl: './pedidos.css'
})

export class Pedidos {

  pedidos = JSON.parse(

    localStorage.getItem('pedidos') || '[]'

  );

} 