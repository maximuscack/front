import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { AreaModel } from 'src/app/models/parameters/area-model';
import { AreaService } from 'src/app/services/parameters/area.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-area-editar',
  templateUrl: './area-editar.component.html',
  styleUrls: ['./area-editar.component.css']
})
export class AreaEditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private service: AreaService,
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
      next: (data: AreaModel) =>{
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }
  
  SaveRecord(){
    let model = new AreaModel();
    model.nombre = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: AreaModel) =>{
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/area-editar"]);
      }
    });    
  }
    

}
