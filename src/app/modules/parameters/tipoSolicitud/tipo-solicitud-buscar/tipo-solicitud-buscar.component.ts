import { Component, OnInit } from '@angular/core';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud-model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

@Component({
  selector: 'app-tipo-solicitud-buscar',
  templateUrl: './tipo-solicitud-buscar.component.html',
  styleUrls: ['./tipo-solicitud-buscar.component.css']
})
export class TipoSolicitudBuscarComponent implements OnInit {

  recordList: TipoSolicitudModel[] = [];
  constructor(
    private service: TipoSolicitudService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: TipoSolicitudModel[]) =>{
        this.recordList = data;
      }
    });
  }

}
