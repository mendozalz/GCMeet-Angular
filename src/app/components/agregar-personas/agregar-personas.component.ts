import { Component, OnDestroy } from '@angular/core';
import { ComunicacionServicio } from '../comunicacion-servicio.service';
import { Subscription } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'agregar-personas',
  templateUrl: './agregar-personas.component.html',
  styleUrls: ['./agregar-personas.component.css'],
})
export class AgregarPersonasComponent implements OnDestroy{
  mostrarSidebar: boolean;
  private subscription: Subscription;

  constructor(private comunicacionServicio: ComunicacionServicio) {
    this.subscription = this.comunicacionServicio.mostrarSidebar$.subscribe(mostrar => {
      this.mostrarSidebar = mostrar;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
