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
    
  }
  toggleSidebarB() {
    const currentValue = this.mostrarSidebarSource.value
    this.mostrarSidebarSource.next(!currentValue);  
  }
  toggleSidebarC() {
    const currentValue = this.mostrarSidebarSource.value
    this.mostrarSidebarSource.next(!currentValue);  
  }

   
}
