import { Component, OnInit } from '@angular/core';
import { AreaModel } from 'src/app/models/parameters/area-model';
import { AreaService } from 'src/app/services/parameters/area.service';

@Component({
  selector: 'app-area-buscar',
  templateUrl: './area-buscar.component.html',
  styleUrls: ['./area-buscar.component.css']
})
export class AreaBuscarComponent implements OnInit {

  recordList: AreaModel[] = [];
  constructor(
    private service: AreaService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: AreaModel[]) =>{
        this.recordList = data;
      }
    });
  }

}
