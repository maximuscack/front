import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoRoutingModule } from './estado-routing.module';
import { SolicitudAceptadoComponent } from './solicitud/solicitud-aceptado/solicitud-aceptado.component';
import { SolicitudAnuladoComponent } from './solicitud/solicitud-anulado/solicitud-anulado.component';
import { SolicitudEnProcesoComponent } from './solicitud/solicitud-en-proceso/solicitud-en-proceso.component';


@NgModule({
  declarations: [
    SolicitudAceptadoComponent,
    SolicitudAnuladoComponent,
    SolicitudEnProcesoComponent
  ],
  imports: [
    CommonModule,
    EstadoRoutingModule
  ]
})
export class EstadoModule { }
