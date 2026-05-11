import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Navbar],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  usuario = '';

  password = '';

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

    const acceso = this.auth.login(
      this.usuario,
      this.password
    );

    if(acceso){

      if(this.auth.esAdmin()){

        this.router.navigate(['/admin']);

      }else{

        this.router.navigate(['/productos']);

      }

    }else{

      alert(
        'Usuario o contraseña incorrectos'
      );

    }

  }

}