import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountComponent } from './public/error/not-fount/not-fount.component';
import { HomeComponent } from './public/general/home/home.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "security",
    loadChildren: () => import("./modules/security/security.module").then(x => x.SecurityModule)
  },
  {
    path: "parameters",
    loadChildren: () => import("./modules/parameters/parameters.module").then(x => x.ParametersModule)
  },
  {
    path: "visualizacion",
    loadChildren: () => import("./modules/visualizacion/visualizacion.module").then(x => x.VisualizacionModule)
  },
  {
    path: "estado",
    loadChildren: () => import("./modules/estado/estado.module").then(x => x.EstadoModule)
  },
  {
    path: "**",
    component: NotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
