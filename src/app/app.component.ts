import { Component} from '@angular/core';
import { ComunicacionServicio } from './components/comunicacion-servicio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:["./app.component.css"]
})
export class AppComponent {

  constructor(
    private comunicacionServicio: ComunicacionServicio
    ){}


  hotizontalProgress = 65
  
}