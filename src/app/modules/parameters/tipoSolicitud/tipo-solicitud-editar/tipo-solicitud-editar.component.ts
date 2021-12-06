import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud-model';
import { TipoSolicitudService } from 'src/app/services/parameters/tipo-solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-tipo-solicitud-editar',
  templateUrl: './tipo-solicitud-editar.component.html',
  styleUrls: ['./tipo-solicitud-editar.component.css']
})
export class TipoSolicitudEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: TipoSolicitudService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }
  
  FormBuilding(){
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]]
    });
  }
  
  get GetDF(){
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: TipoSolicitudModel) =>{
        this.GetDF["id"].setValue(data.id_tipos_de_solicitud);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }
  
  SaveRecord(){
    let model = new TipoSolicitudModel();
    model.nombre = this.GetDF["name"].value;
    model.id_tipos_de_solicitud = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: TipoSolicitudModel) =>{
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/tipo-solicitud-editar"]);
      }
    });    
  }
    

}
