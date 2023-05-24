import { AppComponent } from './app.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HorizontalProgressBarModule } from './components/progress/horizontal-progress-bar/horizontal-progress-bar.module';
import { CirculoprogresoNavbarModule } from './components/progress/circuloprogreso-navbar/circuloprogreso-navbar.module';
import { CirculoProgresoModule } from './components/progress/circulo-progreso/circulo-progreso.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';







@NgModule({
  declarations: [
    AppComponent,   
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CirculoProgresoModule,
    CirculoprogresoNavbarModule,
    HorizontalProgressBarModule,
    MatProgressBarModule,
    ComponentsModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

