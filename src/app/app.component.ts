import { Component} from '@angular/core';
import { ComunicacionServicio } from './components/comunicacion-servicio.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:["./app.component.css"],
})
export class AppComponent {
  constructor(
    private comunicacionServicio: ComunicacionServicio,
    public router: Router 
    ){}


  hotizontalProgress = 65

  getRute(){
    return this.router.url;
  }
}