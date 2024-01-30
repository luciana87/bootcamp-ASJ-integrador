import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Province } from 'src/app/models/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/provinces";

  getProvinces(): Observable<Province[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Province[]>(this.baseUrl, { headers });
  }
}
