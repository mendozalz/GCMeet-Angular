import { Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ComunicacionServicio } from '../comunicacion-servicio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'agregar-personas',
  templateUrl: './agregar-personas.component.html',
  styleUrls: ['./agregar-personas.component.css'],
})
export class AgregarPersonasComponent implements OnDestroy{
  @ViewChild('sidebar') sidebar:ElementRef;
  
  mostrarSidebar: boolean;
  private subscription: Subscription;

  constructor(
    private comunicacionServicio: ComunicacionServicio,
    private renderer2:Renderer2) {
    this.subscription = this.comunicacionServicio.mostrarSidebar$.subscribe(mostrar => {
      this.mostrarSidebar = mostrar;
    });
  }

  ocultarSB(){
    const ocultar = this.sidebar.nativeElement
    this.renderer2.setStyle(ocultar, "display", "none")
    this.comunicacionServicio.toggleSidebar();
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
