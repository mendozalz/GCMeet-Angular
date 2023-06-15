import { Component } from '@angular/core';

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

}
