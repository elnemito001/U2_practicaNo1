// src/app/components/comunicacion/compo-hijo/compo-hijo.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compo-hijo',
  standalone: true,
  imports: [],
  templateUrl: './compo-hijo.html',
  styleUrl: './compo-hijo.css'
})
export class CompoHijoComponent {
  // @Input() permite RECIBIR datos del componente padre
  // Es como una "entrada" de datos
  @Input() data: any = {};

  // Explicación:
  // - @Input() = decorador que dice "este componente puede recibir datos"
  // - data = nombre de la variable que recibirá los datos
  // - any = acepta cualquier tipo de dato
  // - = {} = valor por defecto (objeto vacío)
}
