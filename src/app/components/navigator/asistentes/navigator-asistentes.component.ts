import { Component} from '@angular/core';
import { ComunicacionServicio } from "../../comunicacion-servicio.service";


@Component({
  selector: 'navigator-asistentes',
  templateUrl: './navigator-asistentes.component.html',
  styleUrls: ['./navigator-asistentes.component.css'],
})
export class NavigatorAsistentesComponent {
   
  constructor(
    private comunicacionServicio: ComunicacionServicio
    ) {}

    asistentes = [
      {name: "Juan Camilo", color: "#44a18f"},
      {name: "Lenin Mendoza", color: "gray"},
      {name: "Jhon Eferson", color: "#44a18f"},
      {name: "Diego Vásquez", color: "#44a18f"},
      {name: "Yurly Vélez", color: "#44a18f"},
    ]
    /* colores = [
      {color: "#44a18f"},
      {color: "gray"},
      {color: "#44a18f"},
      {color: "#44a18f"},
      {color: "#44a18f"},
    ] */

  toggleSidebar() {
    this.comunicacionServicio.toggleSidebar();    
    console.log("click btn personas");
    
  }
  
}
