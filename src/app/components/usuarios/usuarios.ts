// src/app/components/usuarios/usuarios.ts
import { Component } from '@angular/core';
// user-profile está dentro de la misma carpeta usuarios/
import { UserProfileComponent } from './user-profile/user-profile';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [UserProfileComponent],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class UsuariosComponent {
}
