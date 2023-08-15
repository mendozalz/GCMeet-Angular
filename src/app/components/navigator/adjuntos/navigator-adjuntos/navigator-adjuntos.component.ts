import { Component, OnInit } from '@angular/core';
import { ComunicacionServicio } from '../../../comunicacion-servicio.service';


@Component({
  selector: 'app-navigator-adjuntos',
  templateUrl: './navigator-adjuntos.component.html',
  styleUrls: ['./navigator-adjuntos.component.css']
})
export class NavigatorAdjuntosComponent /* implements OnInit */{
  
  constructor(
    private comunicacionServicio: ComunicacionServicio
    ) {}

  files= [
    {name: 'Orden del dia 1.pdf'},
    {name: 'Orden del dia 2.pdf'},
    {name: 'Orden del dia 3.pdf'},
    {name: 'Orden del dia 4.pdf'},
    {name: 'Orden del dia 5.pdf'},
  ]

    toggleSidebar() {
      this.comunicacionServicio.toggleSidebar();   
      console.log("Agregar Archivos");
       
    }
}



