import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    FormsModule,
    CommonModule,
    Navbar
  ],

  templateUrl: './login.html',

  styleUrls: ['./login.css']
})

export class Login {

  usuario = '';

  password = '';

  cargando = false;

  constructor(

    private auth: AuthService,

    private router: Router

  ){}

  ingresar(){

    if(

      this.usuario.trim() === '' ||

      this.password.trim() === ''

    ){

      alert(

        'Debes completar usuario y contraseña'

      );

      return;

    }

    this.cargando = true;

    const acceso = this.auth.login(

      this.usuario,

      this.password

    );

    setTimeout(() => {

      this.cargando = false;

      if(acceso){

        // 🔥 ADMIN

        if(this.auth.esAdmin()){

          this.router.navigate([
            '/admin'
          ]);

        }

        // 🔥 USUARIO

        else{

          this.router.navigate([
            '/productos'
          ]);

        }

      }else{

        alert(

          'Usuario o contraseña incorrectos'

        );

      }

    }, 1000);

  }

}