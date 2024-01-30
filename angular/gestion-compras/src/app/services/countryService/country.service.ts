import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/countries";

  getCountries(): Observable<Country[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Country[]>(this.baseUrl, { headers });
  }

}
