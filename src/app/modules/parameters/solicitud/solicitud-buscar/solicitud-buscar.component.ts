import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from 'src/app/models/parameters/solicitud-model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';

@Component({
  selector: 'app-solicitud-buscar',
  templateUrl: './solicitud-buscar.component.html',
  styleUrls: ['./solicitud-buscar.component.css']
})
export class SolicitudBuscarComponent implements OnInit {

  recordList: SolicitudModel[] = [];
  constructor(
    private service: SolicitudService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: SolicitudModel[]) =>{
        this.recordList = data;
      }
    });
  }

}
