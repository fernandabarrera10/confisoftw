import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  usuarios: any[] = [

    {
      nombre: 'Administrador',

      usuario: 'admin',

      password: '1234',

      rol: 'admin',

      estado: 'Activo',

      pedidos: 0,

      compras: 0,

      documento: '',

      telefono: '',

      correo: 'admin@confisoftw.com',

      direccion: '',

      foto:
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },

    {
      nombre: 'Usuario',

      usuario: 'usuario',

      password: '1234',

      rol: 'usuario',

      estado: 'Activo',

      pedidos: 0,

      compras: 0,

      documento: '',

      telefono: '',

      correo: 'usuario@confisoftw.com',

      direccion: '',

      foto:
      'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    }

  ];

  constructor(){

    const usuariosGuardados =
    localStorage.getItem('usuarios');

    if(usuariosGuardados){

      this.usuarios =
      JSON.parse(usuariosGuardados);

    }else{

      this.guardarUsuarios();

    }

  }

  obtenerUsuarios(){

    return this.usuarios;

  }

  obtenerUsuario(usuario: string){

    return this.usuarios.find(

      u => u.usuario === usuario

    );

  }

  agregarUsuario(usuario: any){

    const existeUsuario =
    this.usuarios.find(

      u => u.usuario === usuario.usuario
    );

    if(existeUsuario){

      alert('El usuario ya existe');

      return;
    }

    usuario.rol = 'usuario';

    usuario.estado = 'Activo';

    usuario.pedidos = 0;

    usuario.compras = 0;

    usuario.foto =
    'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';

    this.usuarios.push(usuario);

    this.guardarUsuarios();

  }

  actualizarUsuario(usuarioActualizado: any){

    const index =
    this.usuarios.findIndex(

      u =>
      u.usuario ===
      usuarioActualizado.usuario

    );

    if(index !== -1){

      this.usuarios[index] =
      usuarioActualizado;

      this.guardarUsuarios();

    }

  }

  eliminarUsuario(usuario: string){

    this.usuarios =
    this.usuarios.filter(

      u => u.usuario !== usuario

    );

    this.guardarUsuarios();

  }

  guardarUsuarios(){

    localStorage.setItem(

      'usuarios',

      JSON.stringify(this.usuarios)

    );

  }

}