import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/parameters/facultad-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<FacultadModel[]>{
    return this.http.get<FacultadModel[]>(`${this.url}/facultads`);
  }

  SearchRecord(id: number): Observable<FacultadModel>{
    return this.http.get<FacultadModel>(`${this.url}/facultads/${id}`);
  }
  

  SaveRecord(data: FacultadModel): Observable<FacultadModel>{
    return this.http.post<FacultadModel>(`${this.url}/facultads`, {
      nombre: data.nombre_facultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: FacultadModel): Observable<FacultadModel>{
    return this.http.put<FacultadModel>(`${this.url}/facultads/${data.id_facultad}`, {
      nombre: data.nombre_facultad
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/facultads/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
