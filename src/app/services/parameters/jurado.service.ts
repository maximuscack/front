import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { JuradoModel } from 'src/app/models/parameters/jurado-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<JuradoModel[]>{
    return this.http.get<JuradoModel[]>(`${this.url}/jurado`);
  }

  SearchRecord(id: number): Observable<JuradoModel>{
    return this.http.get<JuradoModel>(`${this.url}/jurado/${id}`);
  }
  

  SaveRecord(data: JuradoModel): Observable<JuradoModel>{
    return this.http.post<JuradoModel>(`${this.url}/jurado`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: JuradoModel): Observable<JuradoModel>{
    return this.http.put<JuradoModel>(`${this.url}/jurado/${data.id}`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/jurado/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
