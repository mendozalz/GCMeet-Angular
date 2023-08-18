import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirculoProgresoModule } from './progress/circulo-progreso/circulo-progreso.module';
import { CirculoprogresoNavbarModule } from './progress/circuloprogreso-navbar/circuloprogreso-navbar.module';
import { HorizontalProgressBarModule } from './progress/horizontal-progress-bar/horizontal-progress-bar.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarDesktopComponent } from './sidebar-left-desktop/sidebar-desktop.component';
import { SidenavModeExample } from './side-bar-left-movil/side-bar.component';
import { SelecionOpcionComponent } from './selecion-opcion/selecion-opcion.component';
import { NavigatorAdjuntosComponent } from './navigator/adjuntos/navigator-adjuntos/navigator-adjuntos.component';
import { NavigatorProgramacionComponent } from './navigator/programacion/navigator-programacion/navigator-programacion.component';
import { NavigatorAsistentesComponent } from './navigator/asistentes/navigator-asistentes.component';
import { NavigatorIconosComponent } from './navigator/navigator-iconos/navigator-iconos.component';
import { RouterModule } from '@angular/router';
import { VerticalProgressComponent } from './progress/vertical-progress/vertical-progress.component';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { AgregarPersonasComponent } from './agregar-personas/agregar-personas.component';
import { FilterAgregarPersonasPipe } from './filter-agregar-personas.pipe';
import { BuscadorAgregarPersonasComponent } from './buscador-agregar-personas/buscador-agregar-personas.component';
import { FormsModule } from '@angular/forms';
import { ResaltadoBuscadorDirective } from './resaltado-buscador.directive';
import { CargarArchivosComponent } from './cargar-archivos/cargar-archivos.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { PreguntasComponent } from './navigator/preguntas/preguntas.component';
import { AgregarPreguntaComponent } from './agregar-pregunta/agregar-pregunta.component';
import { BodyMeetComponent } from './body-meet/body-meet.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BodyDashBoardComponent } from './body-dash-board/body-dash-board.component';
import { Preguntas2Component } from './navigator/preguntas2/preguntas2.component';
import { OpcionesPreguntasComponentIquierda } from './navigator/preguntas2/opciones-preguntas-izquierda/opciones-preguntas.component';
import { CargarArchivosWidgetComponent } from './cargar-archivos-widget/cargar-archivos-widget.component';
import { NgToggleModule } from 'ng-toggle-button';
import { OpcionesPreguntasDerechaComponent } from './navigator/preguntas2/opciones-preguntas-derecha/opciones-preguntas-derecha.component';
import { SidebarRightComponent } from './sidebar-right-movil/sidebar-right.component';




@NgModule({
  declarations: [
    SidebarRightComponent,
    SidebarDesktopComponent,
    SidenavModeExample,
    SelecionOpcionComponent,
    NavigatorAdjuntosComponent,
    NavigatorProgramacionComponent,
    NavigatorAsistentesComponent,
    NavigatorIconosComponent,
    VerticalProgressComponent,
    AgregarPersonasComponent,
    FilterAgregarPersonasPipe,
    BuscadorAgregarPersonasComponent,
    ResaltadoBuscadorDirective,
    CargarArchivosComponent,
    ArchivosComponent,
    PreguntasComponent,
    AgregarPreguntaComponent,
    BodyMeetComponent,
    BodyDashBoardComponent,
    Preguntas2Component,
    OpcionesPreguntasComponentIquierda,
    CargarArchivosWidgetComponent,
    OpcionesPreguntasDerechaComponent,


  ],
  imports: [
    CommonModule,
    CirculoProgresoModule,
    CirculoprogresoNavbarModule,
    HorizontalProgressBarModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    NgIf,
    FormsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRadioModule,
    MatProgressBarModule,
    NgToggleModule.forRoot()
  ],
  exports:[
    SidebarRightComponent,
    SidebarDesktopComponent,
    SidenavModeExample,
    SelecionOpcionComponent,
    NavigatorAdjuntosComponent,
    NavigatorProgramacionComponent,
    NavigatorAsistentesComponent,
    NavigatorIconosComponent,
    AgregarPersonasComponent,
    FilterAgregarPersonasPipe,
    BuscadorAgregarPersonasComponent,
    ResaltadoBuscadorDirective,
    AgregarPreguntaComponent,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRadioModule,
    BodyMeetComponent,
    BodyDashBoardComponent,
  ]
})
export class ComponentsModule { }
