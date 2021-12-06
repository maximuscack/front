import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResultadoModel } from 'src/app/models/parameters/resultado-model';
import { ResultadoService } from 'src/app/services/parameters/resultado.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-resultado-editar',
  templateUrl: './resultado-editar.component.html',
  styleUrls: ['./resultado-editar.component.css']
})
export class ResultadoEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ResultadoService,
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
      next: (data: ResultadoModel) =>{
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }
  
  SaveRecord(){
    let model = new ResultadoModel();
    model.nombre = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: ResultadoModel) =>{
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/resultado-editar"]);
      }
    });    
  }
    

}
