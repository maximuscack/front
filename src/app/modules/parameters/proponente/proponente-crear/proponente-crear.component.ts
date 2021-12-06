import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente-model';
import { ProponenteService } from 'src/app/services/parameters/proponente.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-proponente-crear',
  templateUrl: './proponente-crear.component.html',
  styleUrls: ['./proponente-crear.component.css']
})
export class ProponenteCrearComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: ProponenteService
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
    let model = new ProponenteModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: ProponenteModel) =>{
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/proponente-crear"]);
      }
    });    
  }

}

