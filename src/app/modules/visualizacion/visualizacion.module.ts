import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizacionRoutingModule } from './visualizacion-routing.module';
import { ProponenteConsultarComponent } from './proponente/proponente-consultar/proponente-consultar.component';
import { ProponenteVisualizarComponent } from './proponente/proponente-visualizar/proponente-visualizar.component';
import { ProponenteCargarComponent } from './proponente/proponente-cargar/proponente-cargar.component';
import { ProponenteEliminarComponent } from './proponente/proponente-eliminar/proponente-eliminar.component';
import { SolicitudConsultarComponent } from './solicitud/solicitud-consultar/solicitud-consultar.component';
//import { SolicitudVisualizarComponent } from './solicitud/solicitud-visualizar/solicitud-visualizar.component';
import { SolicitudCargarComponent } from './solicitud/solicitud-cargar/solicitud-cargar.component';
import { SolicitudEliminarComponent } from './solicitud/solicitud-eliminar/solicitud-eliminar.component';
import { SolicitudVisualizarComponent } from './solicitud/solicitud-visualizar/solicitud-visualizar.component';
//import { SolicitudZipComponent } from './solicitud/solicitud-zip/solicitud-zip.component';


@NgModule({
  declarations: [
    SolicitudVisualizarComponent
  ],
  imports: [
    CommonModule,
    VisualizacionRoutingModule
  ]
})
export class VisualizacionModule { }
