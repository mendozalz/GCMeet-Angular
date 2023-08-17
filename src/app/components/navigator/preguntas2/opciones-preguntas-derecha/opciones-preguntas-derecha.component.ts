import { Component } from '@angular/core';

@Component({
  selector: 'opciones-preguntas-derecha',
  templateUrl: './opciones-preguntas-derecha.component.html',
  styleUrls: ['./opciones-preguntas-derecha.component.css']
})
export class OpcionesPreguntasDerechaComponent {
  opciones = [
    {i:"fa-solid fa-bars" , name: "1. Lectura y aprobación del orden del día", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "2. Instalación de la mesa directiva", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "3. Presentación de informes", color: "#7e7e7e"},
  ]
  subOpciones = [
    {i:"fa-solid fa-bars" , name: "3.1 - De la gerencia", color: "#7e7e7e"},
  ]
  subOrden = [
    {i:"fa-solid fa-bars" , name: "a- De la junta social", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "b- De la junta social", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "c- De la junta social", color: "#7e7e7e"},
  ]
}
