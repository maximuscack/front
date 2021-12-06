import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion-model';
import { EvaluacionService } from 'src/app/services/parameters/evaluacion.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-evaluacion-crear',
  templateUrl: './evaluacion-crear.component.html',
  styleUrls: ['./evaluacion-crear.component.css']
})
export class EvaluacionCrearComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: EvaluacionService
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
    let model = new EvaluacionModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: EvaluacionModel) =>{
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/evaluacion-crear"]);
      }
    });    
  }

}
