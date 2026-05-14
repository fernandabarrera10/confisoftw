import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Navbar } from '../../components/navbar/navbar';

import { PedidosService }
from '../../services/pedidos';

@Component({
  selector: 'app-pedidos',

  standalone: true,

  imports: [
    CommonModule,
    Navbar
  ],

  templateUrl: './pedidos.html',

  styleUrls: ['./pedidos.css']
})

export class Pedidos {

  constructor(
    public pedidosService:
    PedidosService
  ){}

}