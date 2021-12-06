import { Component, OnInit } from '@angular/core';
import { ResultadoModel } from 'src/app/models/parameters/resultado-model';
import { ResultadoService } from 'src/app/services/parameters/resultado.service';

@Component({
  selector: 'app-resultado-buscar',
  templateUrl: './resultado-buscar.component.html',
  styleUrls: ['./resultado-buscar.component.css']
})
export class ResultadoBuscarComponent implements OnInit {

  recordList: ResultadoModel[] = [];
  constructor(
    private service: ResultadoService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ResultadoModel[]) =>{
        this.recordList = data;
      }
    });
  }

}
