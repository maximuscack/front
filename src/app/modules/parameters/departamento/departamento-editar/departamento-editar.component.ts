import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { DepartamentoModel } from 'src/app/models/parameters/departamento-model';
import { DepartamentoService } from 'src/app/services/parameters/departamento.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-departamento-editar',
  templateUrl: './departamento-editar.component.html',
  styleUrls: ['./departamento-editar.component.css']
})
export class DepartamentoEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: DepartamentoService,
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
      next: (data: DepartamentoModel) =>{
        this.GetDF["id"].setValue(data.id_departamento);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }
  
  SaveRecord(){
    let model = new DepartamentoModel();
    model.nombre = this.GetDF["name"].value;
    model.id_departamento = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: DepartamentoModel) =>{
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/departamento-editar"]);
      }
    });    
  }
    

}
