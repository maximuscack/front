import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/parameters/facultad-model';
import { FacultadService } from 'src/app/services/parameters/facultad.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-facultad-editar',
  templateUrl: './facultad-editar.component.html',
  styleUrls: ['./facultad-editar.component.css']
})
export class FacultadEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: FacultadService,
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
    let id = this.route.snapshot.params["id_facultad"];
    this.service.SearchRecord(id).subscribe({
      next: (data: FacultadModel) =>{
        this.GetDF["id_facultad"].setValue(data.id_facultad);
        this.GetDF["name"].setValue(data.nombre_facultad);
      }
    });
  }
  
  SaveRecord(){
    let model = new FacultadModel();
    model.nombre_facultad = this.GetDF["name"].value;
    model.id_facultad = this.GetDF["id_facultad"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: FacultadModel) =>{
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/facultad-editar"]);
      }
    });    
  }
    

}
