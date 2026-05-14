import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  carrito: any[] = [];

  constructor(){

    const carritoGuardado =

      localStorage.getItem('carrito');

    if(carritoGuardado){

      this.carrito =

        JSON.parse(carritoGuardado);

    }

  }

  agregarProducto(producto: any){

    const encontrado =

      this.carrito.find(

        (p: any) =>

        p.nombre === producto.nombre

      );

    if(encontrado){

      if(encontrado.cantidad < producto.stock){

        encontrado.cantidad++;

      }else{

        alert(
          'No hay más stock disponible'
        );

      }

    }else{

      this.carrito.push({

        ...producto,

        cantidad: 1

      });

    }

    this.guardarCarrito();

  }

  aumentarCantidad(producto: any){

    if(producto.cantidad < producto.stock){

      producto.cantidad++;

      this.guardarCarrito();

    }else{

      alert(
        'Stock máximo alcanzado'
      );

    }

  }

  disminuirCantidad(producto: any){

    if(producto.cantidad > 1){

      producto.cantidad--;

    }else{

      this.eliminarProducto(producto);

    }

    this.guardarCarrito();

  }

  eliminarProducto(producto: any){

    this.carrito =

      this.carrito.filter(

        (p: any) =>

        p !== producto

      );

    this.guardarCarrito();

  }

  total(){

    let total = 0;

    this.carrito.forEach(

      (producto: any) => {

        total +=

          producto.precio *

          producto.cantidad;

      }

    );

    return total;

  }

  cantidadProductos(){

    let cantidad = 0;

    this.carrito.forEach(

      (producto: any) => {

        cantidad += producto.cantidad;

      }

    );

    return cantidad;

  }

  limpiarCarrito(){

    this.carrito = [];

    this.guardarCarrito();

  }

  guardarCarrito(){

    localStorage.setItem(

      'carrito',

      JSON.stringify(this.carrito)

    );

  }

}