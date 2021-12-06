import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProponenteModel } from 'src/app/models/parameters/proponente-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProponenteService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<ProponenteModel[]>{
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes`);
  }

  SearchRecord(id: number): Observable<ProponenteModel>{
    return this.http.get<ProponenteModel>(`${this.url}/proponentes/${id}`);
  }
  

  SaveRecord(data: ProponenteModel): Observable<ProponenteModel>{
    return this.http.post<ProponenteModel>(`${this.url}/proponentes`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: ProponenteModel): Observable<ProponenteModel>{
    return this.http.put<ProponenteModel>(`${this.url}/proponentes/${data.id_proponente}`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/proponentes/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
