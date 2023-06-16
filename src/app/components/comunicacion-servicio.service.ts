import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionServicio {
  private mostrarSidebarSource = new BehaviorSubject<boolean>(false);
  mostrarSidebar$ = this.mostrarSidebarSource.asObservable();

  toggleSidebar() {
    this.mostrarSidebarSource.next(!this.mostrarSidebarSource.value);
  }
}
