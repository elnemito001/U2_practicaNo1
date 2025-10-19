// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Importamos todos los componentes
import { HomeComponent } from './components/home/home';
import { UsuariosComponent } from './components/usuarios/usuarios';
import { ComunicacionComponent } from './components/comunicacion/comunicacion';
import { AcercaComponent } from './components/acerca/acerca';
import { UsuariosExternosComponent } from './components/usuarios-externos/usuarios-externos';

// Definimos las rutas de la aplicación
export const routes: Routes = [
  // Ruta raíz redirige a /home
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Página principal con información personal
  { path: 'home', component: HomeComponent },

  // Sistema CRUD de usuarios
  { path: 'usuarios', component: UsuariosComponent },

  // Ejemplo de comunicación Padre-Hijo
  { path: 'comunicacion', component: ComunicacionComponent },

  // Información del proyecto
  { path: 'acerca', component: AcercaComponent },

  // ← AGREGAR ESTA RUTA NUEVA
  { path: 'usuarios-externos', component: UsuariosExternosComponent },

  // Cualquier ruta no encontrada redirige a home
  { path: '**', redirectTo: '/home' }
];
