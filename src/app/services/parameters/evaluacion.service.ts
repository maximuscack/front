import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EvaluacionModel } from 'src/app/models/parameters/evaluacion-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<EvaluacionModel[]>{
    return this.http.get<EvaluacionModel[]>(`${this.url}/evaluacion`);
  }

  SearchRecord(id: number): Observable<EvaluacionModel>{
    return this.http.get<EvaluacionModel>(`${this.url}/evaluacion/${id}`);
  }
  

  SaveRecord(data: EvaluacionModel): Observable<EvaluacionModel>{
    return this.http.post<EvaluacionModel>(`${this.url}/evaluacion`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: EvaluacionModel): Observable<EvaluacionModel>{
    return this.http.put<EvaluacionModel>(`${this.url}/evaluacion/${data.id}`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/evaluacion/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
