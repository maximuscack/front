import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudAceptadoComponent } from './solicitud/solicitud-aceptado/solicitud-aceptado.component';
import { SolicitudAnuladoComponent } from './solicitud/solicitud-anulado/solicitud-anulado.component';
import { SolicitudEnProcesoComponent } from './solicitud/solicitud-en-proceso/solicitud-en-proceso.component';

const routes: Routes = [
  {
    path: "solicitud-aceptado",
    component: SolicitudAceptadoComponent
  },
  {
    path: "solicitud-anulado",
    component: SolicitudAnuladoComponent
  },
  {
    path: "solicitud-en-proceso",
    component: SolicitudEnProcesoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoRoutingModule { }
