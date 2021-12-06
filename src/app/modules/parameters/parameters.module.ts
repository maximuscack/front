import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { FacultadCrearComponent } from './facultad/facultad-crear/facultad-crear.component';
import { FacultadEditarComponent } from './facultad/facultad-editar/facultad-editar.component';
import { FacultadBuscarComponent } from './facultad/facultad-buscar/facultad-buscar.component';
import { FacultadRemoverComponent } from './facultad/facultad-remover/facultad-remover.component';
import { DepartamentoCrearComponent } from './departamento/departamento-crear/departamento-crear.component';
import { DepartamentoEditarComponent } from './departamento/departamento-editar/departamento-editar.component';
import { DepartamentoBuscarComponent } from './departamento/departamento-buscar/departamento-buscar.component';
import { DepartamentoRemoverComponent } from './departamento/departamento-remover/departamento-remover.component';
import { JuradoCrearComponent } from './jurado/jurado-crear/jurado-crear.component';
import { JuradoEditarComponent } from './jurado/jurado-editar/jurado-editar.component';
import { JuradoBuscarComponent } from './jurado/jurado-buscar/jurado-buscar.component';
import { JuradoRemoverComponent } from './jurado/jurado-remover/jurado-remover.component';
import { AreaCrearComponent } from './area/area-crear/area-crear.component';
import { AreaEditarComponent } from './area/area-editar/area-editar.component';
import { AreaBuscarComponent } from './area/area-buscar/area-buscar.component';
import { AreaRemoverComponent } from './area/area-remover/area-remover.component';
import { EvaluacionCrearComponent } from './evaluacion/evaluacion-crear/evaluacion-crear.component';
import { EvaluacionEditarComponent } from './evaluacion/evaluacion-editar/evaluacion-editar.component';
import { EvaluacionBuscarComponent } from './evaluacion/evaluacion-buscar/evaluacion-buscar.component';
import { EvaluacionRemoverComponent } from './evaluacion/evaluacion-remover/evaluacion-remover.component';
import { ResultadoCrearComponent } from './resultado/resultado-crear/resultado-crear.component';
import { ResultadoEditarComponent } from './resultado/resultado-editar/resultado-editar.component';
import { ResultadoBuscarComponent } from './resultado/resultado-buscar/resultado-buscar.component';
import { ResultadoRemoverComponent } from './resultado/resultado-remover/resultado-remover.component';
import { TipoSolicitudCrearComponent } from './tipoSolicitud/tipo-solicitud-crear/tipo-solicitud-crear.component';
import { TipoSolicitudEditarComponent } from './tipoSolicitud/tipo-solicitud-editar/tipo-solicitud-editar.component';
import { TipoSolicitudBuscarComponent } from './tipoSolicitud/tipo-solicitud-buscar/tipo-solicitud-buscar.component';
import { TipoSolicitudRemoverComponent } from './tipoSolicitud/tipo-solicitud-remover/tipo-solicitud-remover.component';
import { ProponenteCrearComponent } from './proponente/proponente-crear/proponente-crear.component';
import { ProponenteEditarComponent } from './proponente/proponente-editar/proponente-editar.component';
import { ProponenteBuscarComponent } from './proponente/proponente-buscar/proponente-buscar.component';
import { ProponenteRemoverComponent } from './proponente/proponente-remover/proponente-remover.component';
import { SolicitudCrearComponent } from './solicitud/solicitud-crear/solicitud-crear.component';
import { SolicitudBuscarComponent } from './solicitud/solicitud-buscar/solicitud-buscar.component';
import { SolicitudEditarComponent } from './solicitud/solicitud-editar/solicitud-editar.component';
import { SolicitudRemoverComponent } from './solicitud/solicitud-remover/solicitud-remover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FacultadCrearComponent,
    FacultadEditarComponent,
    FacultadBuscarComponent,
    FacultadRemoverComponent,
    DepartamentoCrearComponent,
    DepartamentoEditarComponent,
    DepartamentoBuscarComponent,
    DepartamentoRemoverComponent,
    JuradoCrearComponent,
    JuradoEditarComponent,
    JuradoBuscarComponent,
    JuradoRemoverComponent,
    AreaCrearComponent,
    AreaEditarComponent,
    AreaBuscarComponent,
    AreaRemoverComponent,
    EvaluacionCrearComponent,
    EvaluacionEditarComponent,
    EvaluacionBuscarComponent,
    EvaluacionRemoverComponent,
    ResultadoCrearComponent,
    ResultadoEditarComponent,
    ResultadoBuscarComponent,
    ResultadoRemoverComponent,
    TipoSolicitudCrearComponent,
    TipoSolicitudEditarComponent,
    TipoSolicitudBuscarComponent,
    TipoSolicitudRemoverComponent,
    ProponenteCrearComponent,
    ProponenteEditarComponent,
    ProponenteBuscarComponent,
    ProponenteRemoverComponent,
    SolicitudCrearComponent,
    SolicitudBuscarComponent,
    SolicitudEditarComponent,
    SolicitudRemoverComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametersModule { }
