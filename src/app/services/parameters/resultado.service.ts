import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ResultadoModel } from 'src/app/models/parameters/resultado-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<ResultadoModel[]>{
    return this.http.get<ResultadoModel[]>(`${this.url}/resultado`);
  }

  SearchRecord(id: number): Observable<ResultadoModel>{
    return this.http.get<ResultadoModel>(`${this.url}/resultado/${id}`);
  }
  

  SaveRecord(data: ResultadoModel): Observable<ResultadoModel>{
    return this.http.post<ResultadoModel>(`${this.url}/resultado`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: ResultadoModel): Observable<ResultadoModel>{
    return this.http.put<ResultadoModel>(`${this.url}/resultado/${data.id}`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/resultado/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
