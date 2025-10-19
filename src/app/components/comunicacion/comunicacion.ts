// src/app/components/comunicacion/comunicacion.ts
import { Component } from '@angular/core';
import { CompoPadreComponent } from './compo-padre/compo-padre';

@Component({
  selector: 'app-comunicacion',
  standalone: true,
  imports: [CompoPadreComponent],
  templateUrl: './comunicacion.html',
  styleUrl: './comunicacion.css'
})
export class ComunicacionComponent {
}
