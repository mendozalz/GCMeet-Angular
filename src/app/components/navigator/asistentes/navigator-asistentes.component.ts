import { Component} from '@angular/core';
import { ComunicacionServicio } from "../../comunicacion-servicio.service";


@Component({
  selector: 'navigator-asistentes',
  templateUrl: './navigator-asistentes.component.html',
  styleUrls: ['./navigator-asistentes.component.css'],
})
export class NavigatorAsistentesComponent /* implements OnInit */ {
   
  constructor(
    private comunicacionServicio: ComunicacionServicio
    ) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.comunicacionServicio.toggleSidebar();    
  }
  
}
