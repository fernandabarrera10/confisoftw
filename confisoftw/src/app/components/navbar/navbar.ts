import { Component } from '@angular/core';

import {
  RouterLink,
  Router
} from '@angular/router';

import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',

  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './navbar.html',

  styleUrl: './navbar.css'
})

export class Navbar {

  constructor(
    public auth: AuthService,
    private router: Router
  ){}

  cerrarSesion(){

    this.auth.logout();

    this.router.navigate(['/login']);

  }

}