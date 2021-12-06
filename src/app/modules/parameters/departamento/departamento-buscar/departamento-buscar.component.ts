import { Component, OnInit } from '@angular/core';
import { DepartamentoModel } from 'src/app/models/parameters/departamento-model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';

@Component({
  selector: 'app-departamento-buscar',
  templateUrl: './departamento-buscar.component.html',
  styleUrls: ['./departamento-buscar.component.css']
})
export class DepartamentoBuscarComponent implements OnInit {

  recordList: DepartamentoModel[] = [];
  constructor(
    private service: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: DepartamentoModel[]) =>{
        this.recordList = data;
      }
    });
  }

}
