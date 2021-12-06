import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResultadoModel } from 'src/app/models/parameters/resultado-model';
import { ResultadoService } from 'src/app/services/parameters/resultado.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-resultado-crear',
  templateUrl: './resultado-crear.component.html',
  styleUrls: ['./resultado-crear.component.css']
})
export class ResultadoCrearComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ResultadoService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]]
    });
  }

  get GetDF(){
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new ResultadoModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ResultadoModel) =>{
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/resultado-crear"]);
      }
    });    
  }

}
