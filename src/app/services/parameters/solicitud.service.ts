import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { SolicitudModel } from 'src/app/models/parameters/solicitud-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<SolicitudModel[]>{
    return this.http.get<SolicitudModel[]>(`${this.url}/solicituds`);
  }

  SearchRecord(id: number): Observable<SolicitudModel>{
    return this.http.get<SolicitudModel>(`${this.url}/solicituds/${id}`);
  }
  

  SaveRecord(data: SolicitudModel): Observable<SolicitudModel>{
    return this.http.post<SolicitudModel>(`${this.url}/solicituds`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: SolicitudModel): Observable<SolicitudModel>{
    return this.http.put<SolicitudModel>(`${this.url}/solicituds/${data.id}`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/solicituds/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
