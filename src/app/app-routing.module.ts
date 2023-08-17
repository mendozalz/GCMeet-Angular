import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavigatorAsistentesComponent } from "./components/navigator/asistentes/navigator-asistentes.component";
import { NavigatorAdjuntosComponent } from "./components/navigator/adjuntos/navigator-adjuntos/navigator-adjuntos.component";
import { NavigatorProgramacionComponent } from "./components/navigator/programacion/navigator-programacion/navigator-programacion.component";

const routes: Routes =[
    {
        path: 'asistentes',
        component: NavigatorAsistentesComponent
    },
    {
        path: 'adjuntos',
        component: NavigatorAdjuntosComponent
    },
    {
        path: 'programacion',
        component: NavigatorProgramacionComponent
    },
    {
        path: '**',
        redirectTo: 'asistentes'
    }
]

@NgModule({
     imports:[
        RouterModule.forRoot(routes)
     ],
     exports:[
        RouterModule
     ]
})
export class AppRoutingModule{

}