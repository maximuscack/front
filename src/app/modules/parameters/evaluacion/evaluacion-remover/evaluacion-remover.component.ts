import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion-model';
import { EvaluacionService } from 'src/app/services/parameters/evaluacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-evaluacion-remover',
  templateUrl: './evaluacion-remover.component.html',
  styleUrls: ['./evaluacion-remover.component.css']
})
export class EvaluacionRemoverComponent implements OnInit {

  id: number = 0;
  name:string = "";

  constructor(
    private router: Router,
    private service: EvaluacionService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: EvaluacionModel) =>{
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
        this.router.navigate(["/parameters/evaluacion-remover"]);
      }
    });    
  }

}
