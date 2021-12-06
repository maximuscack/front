import { Injectable } from '@angular/core';
import { SessionDataModel } from 'src/app/models/security/session-data.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  SaveSessionData(data: SessionDataModel): boolean{
    let currentData = localStorage.getItem("session-info");
    if(currentData){
      return false
    }else{
      let sessionDataString = JSON.stringify(data);
      localStorage.setItem("session-info", sessionDataString);
      return true;
    }
  }

    RemoveSessionData(): boolean{
      let currentData = localStorage.getItem("session-info");
      if(currentData){
        localStorage.removeItem("session-info");
        return true;
      }else{
        return false;
      }
    }

  GetToken(): String{
    let currentData = localStorage.getItem("session-info");
    if(currentData){
      let sessionDataJson = JSON.parse(currentData);
      return sessionDataJson.tk;
    }else{
      return "";
    }
  }
  

  GetSessionInfo(): SessionDataModel{
    let currentData = localStorage.getItem("session-info");
    if(currentData){
      let sessionDataJson = JSON.parse(currentData);
      return sessionDataJson;
    }else{
      return new SessionDataModel();
    }
  }

}
