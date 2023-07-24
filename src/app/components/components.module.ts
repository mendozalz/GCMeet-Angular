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
import { VerticalProgressComponent } from './progress/vertical-progress/vertical-progress.component';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { AgregarPersonasComponent } from './agregar-personas/agregar-personas.component';
import { FilterAgregarPersonasPipe } from './filter-agregar-personas.pipe';
import { BuscadorAgregarPersonasComponent } from './buscador-agregar-personas/buscador-agregar-personas.component';
import { FormsModule } from '@angular/forms';
import { ResaltadoBuscadorDirective } from './resaltado-buscador.directive';
import { CirculoProgresoComponent } from './progress/circulo-progreso/circulo-progreso.component';
import { CargarArchivosComponent } from './cargar-archivos/cargar-archivos.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { PreguntasComponent } from './navigator/preguntas/preguntas.component';
import { AgregarPreguntaComponent } from './agregar-pregunta/agregar-pregunta.component';



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
    FormsModule
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
  ]
})
export class ComponentsModule { }
