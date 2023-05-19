import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirculoprogresoNavbarComponent } from './circuloprogreso-navbar.component';



@NgModule({
  declarations: [
    CirculoprogresoNavbarComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#000000",
      "backgroundGradientStopColor": "#000000",
      "backgroundOpacity": Number('1'),
      "backgroundStroke": "#000000",
      "backgroundStrokeWidth": Number('1'),
      "backgroundPadding": Number('-1'),
      "radius": Number('70'),
      "space": Number('-8'),
      "toFixed": Number('0'),
      "maxPercent": Number('1000'),
      "outerStrokeWidth": Number('9'),
      "outerStrokeColor": "#83734d",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#2e2c3f",
      "innerStrokeWidth": Number('7'),
      "titleColor": "#ffffff",
      "titleFontSize": "34",
      "title": "Mendozalz",
      "titleFontWeight": "500",
      "subtitleColor": "#ffffff",
      "subtitleFontSize": "0",
      "subtitleFontWeight": "0",
      "imageHeight": Number('20'),
      "imageWidth": Number('20'),
      "animationDuration": Number('1000')
    })
  ],
  exports:[
    CirculoprogresoNavbarComponent
  ]
})
export class CirculoprogresoNavbarModule { }
