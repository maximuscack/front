import { Component, OnInit } from '@angular/core';
import { FacultadModel } from 'src/app/models/parameters/facultad-model';
import { FacultadService } from 'src/app/services/parameters/facultad.service';

@Component({
  selector: 'app-facultad-buscar',
  templateUrl: './facultad-buscar.component.html',
  styleUrls: ['./facultad-buscar.component.css']
})
export class FacultadBuscarComponent implements OnInit {

  recordList: FacultadModel[] = [];
  constructor(
    private service: FacultadService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: FacultadModel[]) =>{
        this.recordList = data;
      }
    });
  }

}
