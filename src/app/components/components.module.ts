import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirculoProgresoModule } from './progress/circulo-progreso/circulo-progreso.module';
import { CirculoprogresoNavbarModule } from './progress/circuloprogreso-navbar/circuloprogreso-navbar.module';
import { HorizontalProgressBarModule } from './progress/horizontal-progress-bar/horizontal-progress-bar.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SidebarDesktopComponent } from './sidebar-desktop/sidebar-desktop.component';
import { SidenavModeExample } from './side-bar/side-bar.component';
import { SelecionOpcionComponent } from './selecion-opcion/selecion-opcion.component';
import { NavigatorAdjuntosComponent } from './navigator/adjuntos/navigator-adjuntos/navigator-adjuntos.component';
import { NavigatorProgramacionComponent } from './navigator/programacion/navigator-programacion/navigator-programacion.component';
import { NavigatorAsistentesComponent } from './navigator/asistentes/navigator-asistentes.component';
import { NavigatorIconosComponent } from './navigator/navigator-iconos/navigator-iconos.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SidebarRightComponent,
    SidebarDesktopComponent,
    SidenavModeExample,
    SelecionOpcionComponent,
    NavigatorAdjuntosComponent,
    NavigatorProgramacionComponent,
    NavigatorAsistentesComponent,
    NavigatorIconosComponent
  ],
  imports: [
    CommonModule,
    CirculoProgresoModule,
    CirculoprogresoNavbarModule,
    HorizontalProgressBarModule,
    MatSidenavModule,
    RouterModule
  ],
  exports:[
    SidebarRightComponent,
    SidebarDesktopComponent,
    SidenavModeExample,
    SelecionOpcionComponent,
    NavigatorAdjuntosComponent,
    NavigatorProgramacionComponent,
    NavigatorAsistentesComponent,
    NavigatorIconosComponent
  ]
})
export class ComponentsModule { }
