import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { TipoSolicitudModel } from 'src/app/models/parameters/tipo-solicitud-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<TipoSolicitudModel[]>{
    return this.http.get<TipoSolicitudModel[]>(`${this.url}/tipos-solicituds`);
  }

  SearchRecord(id: number): Observable<TipoSolicitudModel>{
    return this.http.get<TipoSolicitudModel>(`${this.url}/tipos-solicituds/${id}`);
  }
  

  SaveRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel>{
    return this.http.post<TipoSolicitudModel>(`${this.url}/tipos-solicituds`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: TipoSolicitudModel): Observable<TipoSolicitudModel>{
    return this.http.put<TipoSolicitudModel>(`${this.url}/tipos-solicituds/${data.id_tipos_de_solicitud}`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/tipos-solicituds/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
