import { Component } from '@angular/core';

@Component({
  selector: 'archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css'],
})
export class ArchivosComponent {
  archivos = [
    ['Orden del día'],
    ['Informe junta'],
    ['Informe gerente'],
    ['Informe financiero'],
    ['Propisiones']
  ];
}
