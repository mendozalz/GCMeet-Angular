import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirculoProgresoComponent } from './circulo-progreso.component';



@NgModule({
  declarations: [
    CirculoProgresoComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  exports:[
    CirculoProgresoComponent
  ]
})
export class CirculoProgresoModule { }
