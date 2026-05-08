export interface Usuario {

  nombre: string;

  apellido: string;

  correo: string;

  telefono: string;

  usuario: string;

  password: string;

  rol: 'admin' | 'usuario';

}