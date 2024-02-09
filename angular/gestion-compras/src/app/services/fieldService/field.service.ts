import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from 'src/app/models/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/fields"

  
  getFields(): Observable<Field[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Field[]>(this.baseUrl, { headers });
  }

  createField(field: Field): Observable<Field> {
    console.log(field);    
    return this.http.post<Field>(this.baseUrl,field);
  }

  updateField(id: number, field: Field): Observable<Field> {
    return this.http.put<Field>(this.baseUrl + '/' + id, field);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }
}
