import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProponenteCargarComponent } from './proponente/proponente-cargar/proponente-cargar.component';
import { ProponenteConsultarComponent } from './proponente/proponente-consultar/proponente-consultar.component';
import { ProponenteEliminarComponent } from './proponente/proponente-eliminar/proponente-eliminar.component';
import { ProponenteVisualizarComponent } from './proponente/proponente-visualizar/proponente-visualizar.component';
import { SolicitudCargarComponent } from './solicitud/solicitud-cargar/solicitud-cargar.component';
import { SolicitudConsultarComponent } from './solicitud/solicitud-consultar/solicitud-consultar.component';
import { SolicitudEliminarComponent } from './solicitud/solicitud-eliminar/solicitud-eliminar.component';
import { SolicitudVisualizarComponent } from './solicitud/solicitud-visualizar/solicitud-visualizar.component';
//import { SolicitudVisualizarComponent } from './solicitud/solicitud-visualizar/solicitud-visualizar.component';
import { SolicitudZipComponent } from './solicitud/solicitud-zip/solicitud-zip.component';

const routes: Routes = [
  {
    path: "proponente-cargar",
    component: ProponenteCargarComponent
  },
  {
    path: "proponente-consultar",
    component: ProponenteConsultarComponent
  },
  {
    path: "proponente-eliminar",
    component: ProponenteEliminarComponent
  },
  {
    path: "proponente-visualizar",
    component: ProponenteVisualizarComponent
  },
  {
    path: "solicitud-cargar",
    component: SolicitudCargarComponent
  },
  {
    path: "solicitud-consultar",
    component: SolicitudConsultarComponent
  },
  {
    path: "solicitud-eliminar",
    component: SolicitudEliminarComponent
  },
  {
    path: "solicitud-visualizar",
    component: SolicitudVisualizarComponent
  },
  {
    path: "solicitud-zip",
    component: SolicitudZipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizacionRoutingModule { }
