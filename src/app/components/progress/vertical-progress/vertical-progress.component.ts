import { Component } from '@angular/core';
import { ComunicacionServicio } from '../../comunicacion-servicio.service';

interface Step {
  label: string;
  subSteps?: string[];
}

@Component({
  selector: 'vertical-progress',
  templateUrl: './vertical-progress.component.html',
  styleUrls: ['./vertical-progress.component.css']
})


export class VerticalProgressComponent {
  steps: Step[] = [
    { label: 'Lectura y aprobación del orden del día' },
    { label: 'Instalación de la mesa directiva' },
    { label: 'Presentación de informes' },
    {
      label: 'informes',
      subSteps: ['a. De la gerencia', 'b. De la junta social']
    },
    { label: 'Orden del día.pdf' }
  ];

  isCurrentStep(index: number): boolean {
    return index === this.steps.length - 1;
  }

  isPreviousStepDone(index: number): boolean {
    return index < this.steps.length - 2;
  }

  constructor(
    private comunicacionServicio: ComunicacionServicio
    ) {}


  toggleSidebarB() {
    this.comunicacionServicio.toggleSidebarB();    
    console.log("click btn preguntas");
    
  }
  toggleSidebarC() {
    this.comunicacionServicio.toggleSidebarB();    
    console.log("click btn preguntas");
    
  }

}
