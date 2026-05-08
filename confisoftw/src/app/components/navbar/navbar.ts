import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(
    public auth: Auth,
    private router: Router
  ){}

  cerrarSesion(){

    this.auth.logout();

    this.router.navigate(['/login']);

  }

}