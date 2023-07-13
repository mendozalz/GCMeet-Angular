import { Component } from '@angular/core';
import { ComunicacionServicio } from '../comunicacion-servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cargar-archivos',
  templateUrl: './cargar-archivos.component.html',
  styleUrls: ['./cargar-archivos.component.css']
})
export class CargarArchivosComponent {
  mostrarSidebar: boolean;
  private subscription: Subscription;

  constructor(
    private comunicacionServicio: ComunicacionServicio) {
    this.subscription = this.comunicacionServicio.mostrarSidebar$.subscribe(mostrar => {
      this.mostrarSidebar = mostrar;
    });
  }

  toggleSidebar() {
    this.comunicacionServicio.toggleSidebar();
    console.log("click toggleSidebar");
    
  }
}
