import { Component } from '@angular/core';

@Component({
  selector: 'agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css'],
})
export class AgregarPreguntaComponent {
  archivos = [
    ['Orden del día'],
    ['Informe junta'],
    ['Informe gerente'],
    ['Informe financiero'],
    ['Propisiones']
  ];
}
