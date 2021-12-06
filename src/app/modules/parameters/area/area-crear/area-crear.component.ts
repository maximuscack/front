import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { AreaModel } from 'src/app/models/parameters/area-model';
import { AreaService } from 'src/app/services/parameters/area.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-area-crear',
  templateUrl: './area-crear.component.html',
  styleUrls: ['./area-crear.component.css']
})
export class AreaCrearComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: AreaService
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
    let model = new AreaModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: AreaModel) =>{
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/area-crear"]);
      }
    });    
  }

}
