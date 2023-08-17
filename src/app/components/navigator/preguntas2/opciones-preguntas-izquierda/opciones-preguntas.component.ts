import { Component } from '@angular/core';

@Component({
  selector: 'opciones-preguntas-izquierda',
  templateUrl: './opciones-preguntas.component.html',
  styleUrls: ['./opciones-preguntas.component.css']
})
export class OpcionesPreguntasComponentIquierda {

  opciones2=[
    {opcion: "Seleccione padre"},
    {opcion: "Sub opción"},
    {opcion: "Elección"},
  ]

  opciones3=[
    {opcion: "Rol a postularse"},
  ]

  seleccionados = [
    {i:"fa-solid fa-bars" , name: "Juan Camilo", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "Lenin Mendoza", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "Jhon Eferson", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "Diego Vásquez", color: "#7e7e7e"},
    {i:"fa-solid fa-bars" , name: "Yurly Vélez", color: "#7e7e7e"},
  ]


}
