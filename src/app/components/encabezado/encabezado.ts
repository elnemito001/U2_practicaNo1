// src/app/components/encabezado/encabezado.ts
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css'
})
export class EncabezadoComponent {
  menu = [
    { label: 'Home', path: '/home' },
    { label: 'Usuarios', path: '/usuarios' },
    { label: 'Comunicación', path: '/comunicacion' },
    { label: 'Acerca de', path: '/acerca' }
  ];
}
