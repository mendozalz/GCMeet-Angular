import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionServicio {
  private mostrarSidebarSource = new BehaviorSubject<boolean>(false);
  mostrarSidebar$ = this.mostrarSidebarSource.asObservable();

  toggleSidebar() {
    const currentValue = this.mostrarSidebarSource.value
    this.mostrarSidebarSource.next(!currentValue);
    console.log("Entro en servicios");
    
  }
  toggleSidebarB() {
    const currentValue = this.mostrarSidebarSource.value
    this.mostrarSidebarSource.next(!currentValue);
    console.log("Entro en servicios");
    
  }
  
}
