import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente-model';
import { ProponenteService } from 'src/app/services/parameters/proponente.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-proponente-editar',
  templateUrl: './proponente-editar.component.html',
  styleUrls: ['./proponente-editar.component.css']
})
export class ProponenteEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ProponenteService,
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
      next: (data: ProponenteModel) =>{
        this.GetDF["id"].setValue(data.id_proponente);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }
  
  SaveRecord(){
    let model = new ProponenteModel();
    model.nombre = this.GetDF["name"].value;
    model.id_proponente = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: ProponenteModel) =>{
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/proponente-editar"]);
      }
    });    
  }
    

}

