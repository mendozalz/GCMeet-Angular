import { Component } from '@angular/core';

@Component({
  selector: 'selecion-opcion',
  templateUrl: './selecion-opcion.component.html',
})
export class SelecionOpcionComponent {

  opciones=[
    {i: 'fa-sharp fa-check', opcion: "opción 1", voto:"10", porcentaje:"15%"},
    {i: 'fa-sharp fa-check', opcion: "opción 2", voto:"3", porcentaje:"3%"},
    {i: 'fa-sharp fa-check', opcion: "opción 3", voto:"7", porcentaje:"5%"},
    {i: 'fa-sharp fa-check', opcion: "opción 4", voto:"3", porcentaje:"3%"},
    {i: 'fa-sharp fa-check', opcion: "opción 5", voto:"10", porcentaje:"5%"},
    {i: 'fa-sharp fa-check', opcion: "opción 6", voto:"9", porcentaje:"5%"},
    {i: 'fa-sharp fa-check', opcion: "opción 7", voto:"3", porcentaje:"3%"},
    {i: 'fa-sharp fa-check', opcion: "opción 8", voto:"10", porcentaje:"15%"},
  ]

}
