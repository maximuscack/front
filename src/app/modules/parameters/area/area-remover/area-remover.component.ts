import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { AreaModel } from 'src/app/models/parameters/area-model';
import { AreaService } from 'src/app/services/parameters/area.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-area-remover',
  templateUrl: './area-remover.component.html',
  styleUrls: ['./area-remover.component.css']
})
export class AreaRemoverComponent implements OnInit {

  id: number = 0;
  name:string = "";

  constructor(
    private router: Router,
    private service: AreaService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: AreaModel) =>{
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
        this.router.navigate(["/parameters/area-remover"]);
      }
    });    
  }

}
