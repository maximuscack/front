import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResultadoModel } from 'src/app/models/parameters/resultado-model';
import { ResultadoService } from 'src/app/services/parameters/resultado.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-resultado-remover',
  templateUrl: './resultado-remover.component.html',
  styleUrls: ['./resultado-remover.component.css']
})
export class ResultadoRemoverComponent implements OnInit {

  id: number = 0;
  name:string = "";

  constructor(
    private router: Router,
    private service: ResultadoService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ResultadoModel) =>{
        if(data.id && data.nombre){
          this.id=data.id;
          this.name=data.nombre;
        }
      }
    });
  }
  
  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) =>{
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/resultado-remover"]);
      }
    });    
  }

}
