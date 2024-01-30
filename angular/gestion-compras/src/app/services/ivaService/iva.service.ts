import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IvaType } from 'src/app/models/ivaType';

@Injectable({
  providedIn: 'root'
})
export class IvaService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = "http://localhost:8080/iva-types";


  getIvaConditions(): Observable<IvaType[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<IvaType[]>(this.baseUrl, { headers });
  }

}
