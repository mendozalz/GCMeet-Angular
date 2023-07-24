import { Component } from '@angular/core';
import { ComunicacionServicio } from '../../comunicacion-servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  mostrarSidebar: boolean;
  private subscription: Subscription;

  constructor(
    private comunicacionServicio: ComunicacionServicio) {
    this.subscription = this.comunicacionServicio.mostrarSidebar$.subscribe(mostrar => {
      this.mostrarSidebar = mostrar;
    });
  }

  toggleSidebarB() {
    this.comunicacionServicio.toggleSidebarB();
    console.log("click toggleSidebar");
    
  }
}
