import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente-model';
import { ProponenteService } from 'src/app/services/parameters/proponente.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-proponente-remover',
  templateUrl: './proponente-remover.component.html',
  styleUrls: ['./proponente-remover.component.css']
})
export class ProponenteRemoverComponent implements OnInit {

  id: number = 0;
  name:string = "";

  constructor(
    private router: Router,
    private service: ProponenteService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ProponenteModel) =>{
        if(data.id_proponente && data.nombre){
          this.id=data.id_proponente;
          this.name=data.nombre;
        }
      }
    });
  }
  
  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) =>{
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/proponente-remover"]);
      }
    });    
  }

}