// src/app/components/comunicacion/compo-padre/compo-padre.ts
import { Component } from '@angular/core';
import { CompoHijoComponent } from '../compo-hijo/compo-hijo';

@Component({
  selector: 'app-compo-padre',
  standalone: true,
  imports: [CompoHijoComponent],
  templateUrl: './compo-padre.html',
  styleUrl: './compo-padre.css'
})
export class CompoPadreComponent {
  // Variable que contiene los datos que vamos a ENVIAR al hijo
  user = {
    nombre: "Hugo",
    apellido: "Larraga"
  }
}
