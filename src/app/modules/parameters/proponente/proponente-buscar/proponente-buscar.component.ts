import { Component, OnInit } from '@angular/core';
import { ProponenteModel } from 'src/app/models/parameters/proponente-model';
import { ProponenteService } from 'src/app/services/parameters/proponente.service';

@Component({
  selector: 'app-proponente-buscar',
  templateUrl: './proponente-buscar.component.html',
  styleUrls: ['./proponente-buscar.component.css']
})
export class ProponenteBuscarComponent implements OnInit {

  recordList: ProponenteModel[] = [];
  constructor(
    private service: ProponenteService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ProponenteModel[]) =>{
        this.recordList = data;
      }
    });
  }

}

