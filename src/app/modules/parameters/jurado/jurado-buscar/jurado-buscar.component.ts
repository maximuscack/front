import { Component, OnInit } from '@angular/core';
import { JuradoModel } from 'src/app/models/parameters/jurado-model';
import { JuradoService } from 'src/app/services/parameters/jurado.service';

@Component({
  selector: 'app-jurado-buscar',
  templateUrl: './jurado-buscar.component.html',
  styleUrls: ['./jurado-buscar.component.css']
})
export class JuradoBuscarComponent implements OnInit {

  recordList: JuradoModel[] = [];
  constructor(
    private service: JuradoService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: JuradoModel[]) =>{
        this.recordList = data;
      }
    });
  }

}
