import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  productos: any[] = [

    {
      nombre: 'Laptop Gamer',

      precio: 3500000,

      stock: 50,

      vendidos: 0,

      categoria: 'Tecnología',

      imagen:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop'
    },

    {
      nombre: 'Audífonos',

      precio: 250000,

      stock: 40,

      vendidos: 0,

      categoria: 'Tecnología',

      imagen:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    }

  ];

  constructor(){

    const productosGuardados =

    localStorage.getItem(
      'productos'
    );

    if(productosGuardados){

      this.productos =

      JSON.parse(
        productosGuardados
      );

    }else{

      this.guardarProductos();

    }

  }

  obtenerProductos(){

    return this.productos;

  }

  agregarProducto(producto: any){

    producto.vendidos = 0;

    this.productos.push(producto);

    this.guardarProductos();

  }

  disminuirStock(producto: any){

    const productoEncontrado =

    this.productos.find(

      (p: any) =>

      p.nombre === producto.nombre

    );

    if(

      productoEncontrado &&

      productoEncontrado.stock > 0

    ){

      productoEncontrado.stock--;

      productoEncontrado.vendidos++;

      this.guardarProductos();

    }

  }

  aumentarStock(producto: any){

    const productoEncontrado =

    this.productos.find(

      (p: any) =>

      p.nombre === producto.nombre

    );

    if(productoEncontrado){

      productoEncontrado.stock++;

      this.guardarProductos();

    }

  }

  eliminarProducto(nombre: string){

    this.productos =

    this.productos.filter(

      (p: any) =>

      p.nombre !== nombre

    );

    this.guardarProductos();

  }

  totalProductos(){

    return this.productos.length;

  }

  totalInventario(){

    return this.productos.reduce(

      (total: number, producto: any) =>

      total + producto.stock,

      0

    );

  }

  totalGanancias(){

    return this.productos.reduce(

      (total: number, producto: any) =>

      total +

      (producto.vendidos * producto.precio),

      0

    );

  }

  guardarProductos(){

    localStorage.setItem(

      'productos',

      JSON.stringify(this.productos)

    );

  }

}