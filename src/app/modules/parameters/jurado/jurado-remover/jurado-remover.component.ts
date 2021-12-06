import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradoModel } from 'src/app/models/parameters/jurado-model';
import { JuradoService } from 'src/app/services/parameters/jurado.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-jurado-remover',
  templateUrl: './jurado-remover.component.html',
  styleUrls: ['./jurado-remover.component.css']
})
export class JuradoRemoverComponent implements OnInit {

  id: number = 0;
  name:string = "";

  constructor(
    private router: Router,
    private service: JuradoService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: JuradoModel) =>{
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
        this.router.navigate(["/parameters/jurado-remover"]);
      }
    });    
  }

}
