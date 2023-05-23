import { AppComponent } from './app.component';
import { SelecionOpcionComponent } from './selecion-opcion/selecion-opcion.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarDesktopComponent } from './sidebar-desktop/sidebar-desktop.component';


import { SidenavModeExample } from './side-bar/side-bar.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CirculoprogresoNavbarModule } from './progress/circuloprogreso-navbar/circuloprogreso-navbar.module';
import { CirculoProgresoModule } from './progress/circulo-progreso/circulo-progreso.module';
import { HorizontalProgressBarModule } from './progress/horizontal-progress-bar/horizontal-progress-bar.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';






@NgModule({
  declarations: [
    AppComponent,
    SelecionOpcionComponent,
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
    BrowserAnimationsModule,
    CirculoProgresoModule,
    CirculoprogresoNavbarModule,
    HorizontalProgressBarModule,
    MatProgressBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

