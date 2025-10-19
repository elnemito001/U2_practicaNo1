// src/app/components/usuarios-externos/usuarios-externos.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioExternoService, Usuario } from '../../services/usuario-externo.service';

@Component({
  selector: 'app-usuarios-externos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios-externos.html',
  styleUrl: './usuarios-externos.css'
})
export class UsuariosExternosComponent implements OnInit {

  usuarios: Usuario[] = [];
  cargando = false;
  error = '';

  constructor(private usuarioExternoService: UsuarioExternoService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.error = '';

    this.usuarioExternoService.obtenerUsuarios().subscribe({
      next: (datos) => {
        console.log('Usuarios cargados:', datos);
        this.usuarios = datos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error:', err);
        this.error = 'Error al cargar los usuarios';
        this.cargando = false;
      }
    });
  }
}
