import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { AreaModel } from 'src/app/models/parameters/area-model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  url:string = ConfigurationData.BUSSINESS_MS_URL;
  tk: String = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
      this.tk = this.localStorageService.GetToken();    
  }

  GetRecordList(): Observable<AreaModel[]>{
    return this.http.get<AreaModel[]>(`${this.url}/area-linea-de-investigacions`);
  }

  SearchRecord(id: number): Observable<AreaModel>{
    return this.http.get<AreaModel>(`${this.url}/area-linea-de-investigacions/${id}`);
  }
  

  SaveRecord(data: AreaModel): Observable<AreaModel>{
    return this.http.post<AreaModel>(`${this.url}/area-linea-de-investigacions`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  EditRecord(data: AreaModel): Observable<AreaModel>{
    return this.http.put<AreaModel>(`${this.url}/area-linea-de-investigacions/${data.id}`, {
      nombre: data.nombre
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

  RemoveRecord(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/area-linea-de-investigacions/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
