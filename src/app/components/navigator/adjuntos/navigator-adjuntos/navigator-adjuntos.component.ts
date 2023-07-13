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

   /*  ngOnInit(): void {} */

    toggleSidebar() {
      this.comunicacionServicio.toggleSidebar();   
      console.log("Agregar Archivos");
       
    }
}



