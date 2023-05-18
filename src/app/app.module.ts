import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirculoProgresoComponent } from './circulo-progreso/circulo-progreso.component';
import { SelecionOpcionComponent } from './selecion-opcion/selecion-opcion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
/* import { SideBarComponent } from './side-bar/side-bar.component'; */
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavModeExample } from './side-bar/side-bar.component';
import { SidebarDesktopComponent } from './sidebar-desktop/sidebar-desktop.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';




@NgModule({
  declarations: [
    AppComponent,
    CirculoProgresoComponent,
    SelecionOpcionComponent,
    /* SideBarComponent */
    SidenavModeExample,
    SidebarDesktopComponent,
    SidebarRightComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      "outerStrokeColor": "#857526",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": false,
      "showSubtitle": false,
      "showUnits": false,
      "showBackground": false,
      "startFromZero": false,
      "lazy": true}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

