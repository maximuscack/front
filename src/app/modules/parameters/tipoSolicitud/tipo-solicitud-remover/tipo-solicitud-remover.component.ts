import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud-model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tipo-solicitud-remover',
  templateUrl: './tipo-solicitud-remover.component.html',
  styleUrls: ['./tipo-solicitud-remover.component.css']
})
export class TipoSolicitudRemoverComponent implements OnInit {

  id: number = 0;
  name:string = "";

  constructor(
    private router: Router,
    private service: TipoSolicitudService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitudModel) =>{
        if(data.id_tipos_de_solicitud && data.nombre){
          this.id=data.id_tipos_de_solicitud;
          this.name=data.nombre;
        }
      }
    });
  }
  
  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) =>{
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/tipo-solicitud-remover"]);
      }
    });    
  }

}