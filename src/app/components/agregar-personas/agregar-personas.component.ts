import { Component } from '@angular/core';
import { ComunicacionServicio } from '../comunicacion-servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'agregar-personas',
  templateUrl: './agregar-personas.component.html',
  styleUrls: ['./agregar-personas.component.css'],
})
export class AgregarPersonasComponent{
  
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
