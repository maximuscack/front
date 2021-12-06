import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProponenteCargarComponent } from '../visualizacion/proponente/proponente-cargar/proponente-cargar.component';
import { SolicitudCargarComponent } from '../visualizacion/solicitud/solicitud-cargar/solicitud-cargar.component';
import { AreaBuscarComponent } from './area/area-buscar/area-buscar.component';
import { AreaCrearComponent } from './area/area-crear/area-crear.component';
import { AreaEditarComponent } from './area/area-editar/area-editar.component';
import { AreaRemoverComponent } from './area/area-remover/area-remover.component';
import { DepartamentoBuscarComponent } from './departamento/departamento-buscar/departamento-buscar.component';
import { DepartamentoCrearComponent } from './departamento/departamento-crear/departamento-crear.component';
import { DepartamentoEditarComponent } from './departamento/departamento-editar/departamento-editar.component';
import { DepartamentoRemoverComponent } from './departamento/departamento-remover/departamento-remover.component';
import { EvaluacionBuscarComponent } from './evaluacion/evaluacion-buscar/evaluacion-buscar.component';
import { EvaluacionCrearComponent } from './evaluacion/evaluacion-crear/evaluacion-crear.component';
import { EvaluacionEditarComponent } from './evaluacion/evaluacion-editar/evaluacion-editar.component';
import { EvaluacionRemoverComponent } from './evaluacion/evaluacion-remover/evaluacion-remover.component';
import { FacultadBuscarComponent } from './facultad/facultad-buscar/facultad-buscar.component';
import { FacultadCrearComponent } from './facultad/facultad-crear/facultad-crear.component';
import { FacultadEditarComponent } from './facultad/facultad-editar/facultad-editar.component';
import { FacultadRemoverComponent } from './facultad/facultad-remover/facultad-remover.component';
import { JuradoBuscarComponent } from './jurado/jurado-buscar/jurado-buscar.component';
import { JuradoCrearComponent } from './jurado/jurado-crear/jurado-crear.component';
import { JuradoEditarComponent } from './jurado/jurado-editar/jurado-editar.component';
import { JuradoRemoverComponent } from './jurado/jurado-remover/jurado-remover.component';
import { ProponenteBuscarComponent } from './proponente/proponente-buscar/proponente-buscar.component';
import { ProponenteCrearComponent } from './proponente/proponente-crear/proponente-crear.component';
import { ProponenteEditarComponent } from './proponente/proponente-editar/proponente-editar.component';
import { ProponenteRemoverComponent } from './proponente/proponente-remover/proponente-remover.component';
import { ResultadoBuscarComponent } from './resultado/resultado-buscar/resultado-buscar.component';
import { ResultadoCrearComponent } from './resultado/resultado-crear/resultado-crear.component';
import { ResultadoEditarComponent } from './resultado/resultado-editar/resultado-editar.component';
import { ResultadoRemoverComponent } from './resultado/resultado-remover/resultado-remover.component';
import { SolicitudBuscarComponent } from './solicitud/solicitud-buscar/solicitud-buscar.component';
import { SolicitudCrearComponent } from './solicitud/solicitud-crear/solicitud-crear.component';
import { SolicitudEditarComponent } from './solicitud/solicitud-editar/solicitud-editar.component';
import { SolicitudRemoverComponent } from './solicitud/solicitud-remover/solicitud-remover.component';
import { TipoSolicitudBuscarComponent } from './tipoSolicitud/tipo-solicitud-buscar/tipo-solicitud-buscar.component';
import { TipoSolicitudCrearComponent } from './tipoSolicitud/tipo-solicitud-crear/tipo-solicitud-crear.component';
import { TipoSolicitudEditarComponent } from './tipoSolicitud/tipo-solicitud-editar/tipo-solicitud-editar.component';
import { TipoSolicitudRemoverComponent } from './tipoSolicitud/tipo-solicitud-remover/tipo-solicitud-remover.component';

const routes: Routes = [
  {
    path: "area-buscar",
    component: AreaBuscarComponent
  },
  {
    path: "area-crear",
    component: AreaCrearComponent
  },
  {
    path: "area-editar/:id",
    component: AreaEditarComponent
  },
  {
    path: "area-remover/:id",
    component: AreaRemoverComponent
  },
  {
    path: "departamento-buscar",
    component: DepartamentoBuscarComponent
  },
  {
    path: "departamento-crear",
    component: DepartamentoCrearComponent
  },
  {
    path: "departamento-editar",
    component: DepartamentoEditarComponent
  },
  {
    path: "departamento-remover",
    component: DepartamentoRemoverComponent
  },
  {
    path: "evaluacion-buscar",
    component: EvaluacionBuscarComponent
  },
  {
    path: "evaluacion-crear",
    component: EvaluacionCrearComponent
  },
  {
    path: "evaluacion-editar",
    component: EvaluacionEditarComponent
  },
  {
    path: "evaluacion-remover",
    component: EvaluacionRemoverComponent
  },
  {
    path: "facultad-buscar",
    component: FacultadBuscarComponent
  },
  {
    path: "facultad-crear",
    component: FacultadCrearComponent
  },
  {
    path: "facultad-editar",
    component: FacultadEditarComponent
  },
  {
    path: "facultad-remover",
    component: FacultadRemoverComponent
  },
  {
    path: "jurado-buscar",
    component: JuradoBuscarComponent
  },
  {
    path: "jurado-crear",
    component: JuradoCrearComponent
  },
  {
    path: "jurado-editar",
    component: JuradoEditarComponent
  },
  {
    path: "jurado-remover",
    component: JuradoRemoverComponent
  },
  {
    path: "proponente-buscar",
    component: ProponenteBuscarComponent
  },
  {
    path: "proponente-crear",
    component: ProponenteCrearComponent
  },
  {
    path: "proponente-editar",
    component: ProponenteEditarComponent
  },
  {
    path: "proponente-remover",
    component: ProponenteRemoverComponent
  },
  {
    path: "resultado-buscar",
    component: ResultadoBuscarComponent
  },
  {
    path: "resultado-crear",
    component: ResultadoCrearComponent
  },
  {
    path: "resultado-editar",
    component: ResultadoEditarComponent
  },
  {
    path: "resultado-remover",
    component: ResultadoRemoverComponent
  },
  {
    path: "solicitud-buscar",
    component: SolicitudBuscarComponent
  },
  {
    path: "solicitud-crear",
    component: SolicitudCrearComponent
  },
  {
    path: "solicitud-editar",
    component: SolicitudEditarComponent
  },
  {
    path: "solicitud-remover",
    component: SolicitudRemoverComponent
  },
  {
    path: "tipoSolicitud-buscar",
    component: TipoSolicitudBuscarComponent
  },
  {
    path: "tipoSolicitud-crear",
    component: TipoSolicitudCrearComponent
  },
  {
    path: "tipoSolicitud-editar",
    component: TipoSolicitudEditarComponent
  },
  {
    path: "tipoSolicitud-remover",
    component: TipoSolicitudRemoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
