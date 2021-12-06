import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/parameters/solicitud-model';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-solicitud-editar',
  templateUrl: './solicitud-editar.component.html',
  styleUrls: ['./solicitud-editar.component.css']
})
export class SolicitudEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: SolicitudService,
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
      next: (data: SolicitudModel) =>{
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }
  
  SaveRecord(){
    let model = new SolicitudModel();
    model.nombre = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: SolicitudModel) =>{
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/solicitud-editar"]);
      }
    });    
  }
    

}
