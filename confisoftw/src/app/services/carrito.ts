import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  carrito: any[] = [];

  agregarProducto(producto: any){

    const existe = this.carrito.find(
      p => p.nombre === producto.nombre
    );

    if(existe){

      existe.cantidad++;

    }else{

      this.carrito.push({
        ...producto,
        cantidad: 1
      });

    }

  }

  aumentarCantidad(producto: any){

    producto.cantidad++;

  }

  disminuirCantidad(producto: any){

    producto.cantidad--;

    if(producto.cantidad <= 0){

      this.carrito = this.carrito.filter(
        p => p !== producto
      );

    }

  }

  total(){

    return this.carrito.reduce(

      (total, producto) =>

        total +
        (producto.precio * producto.cantidad),

      0

    );

  }

}