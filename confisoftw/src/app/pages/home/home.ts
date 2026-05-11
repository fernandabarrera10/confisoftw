import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { Navbar } from '../../components/navbar/navbar';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}