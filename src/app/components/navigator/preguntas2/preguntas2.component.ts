import { Component } from '@angular/core';
import { ComunicacionServicio } from '../../comunicacion-servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preguntas2',
  templateUrl: './preguntas2.component.html',
  styleUrls: ['./preguntas2.component.css'],
})
export class Preguntas2Component {
  mostrarSidebar: boolean;
  private subscription: Subscription;

  constructor(private comunicacionServicio: ComunicacionServicio) {
    this.subscription = this.comunicacionServicio.mostrarSidebar$.subscribe(
      (mostrar) => {
        this.mostrarSidebar = mostrar;
      }
    );
  }

  toggleSidebarC() {
    this.comunicacionServicio.toggleSidebarB();
    console.log('click toggleSidebar');
  }
}
