import { Component, OnInit } from '@angular/core';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion-model';
import { EvaluacionService } from 'src/app/services/parameters/evaluacion.service';

@Component({
  selector: 'app-evaluacion-buscar',
  templateUrl: './evaluacion-buscar.component.html',
  styleUrls: ['./evaluacion-buscar.component.css']
})
export class EvaluacionBuscarComponent implements OnInit {

  recordList: EvaluacionModel[] = [];
  constructor(
    private service: EvaluacionService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: EvaluacionModel[]) =>{
        this.recordList = data;
      }
    });
  }

}

