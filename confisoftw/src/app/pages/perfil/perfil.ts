import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-perfil',
  imports: [Navbar],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

  constructor(
    private auth: Auth,
    private router: Router
  ){

    if(!this.auth.verificarLogin()){

      this.router.navigate(['/login']);

    }

  }

  usuario = {

    nombre: 'Fernanda',
    apellido: 'Barrera',
    correo: 'fernanda@gmail.com',
    telefono: '3200000000',
    username: 'fernanda10'

  };

}