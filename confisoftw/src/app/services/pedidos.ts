import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PedidosService {

  pedidos: any[] = [];

  constructor(){

    const pedidosGuardados =

    localStorage.getItem(
      'pedidos'
    );

    if(pedidosGuardados){

      this.pedidos =

      JSON.parse(
        pedidosGuardados
      );

    }

  }

  guardarPedido(pedido: any){

    this.pedidos.push(pedido);

    localStorage.setItem(

      'pedidos',

      JSON.stringify(this.pedidos)

    );

  }

  obtenerPedidos(){

    return this.pedidos;

  }

}