import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UserCredentialsModel } from 'src/app/models/security/user-credentials.model';
import { SecurityService } from 'src/app/services/shared/security.service';
import { UserCreationComponent } from '../../users/user-creation/user-creation.component';
import { MD5 } from 'crypto-js';
import { SessionDataModel } from 'src/app/models/security/session-data.model';
import { LocalizedString } from '@angular/compiler';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { Router } from '@angular/router';

declare const ShowGeneralMessage: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder,
    private securityService: SecurityService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(ConfigurationData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(ConfigurationData.PASSWORD_MIN_LENGHT)]]
    })
  }

  Login(){
    if(this.dataForm.invalid){
      ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
    }else{
      let credentials = new UserCredentialsModel();
      credentials.username = this.GetDF["username"].value;
      credentials.password = MD5(this.GetDF["password"].value).toString();
      this.securityService.Login(credentials).subscribe({
        next: (data:SessionDataModel) => {
          console.log(data);
          let saved = this.localStorageService.SaveSessionData(data);
          data.isLoggedIn = true;
          this.securityService.RefreshSessionInfo(data);
          this.router.navigate(["/home"]);
        },
        error: (error:any) => {

        },
        complete: () =>{

        }
      });
    }
  }

  get GetDF(){
    return this.dataForm.controls;
  }


}
