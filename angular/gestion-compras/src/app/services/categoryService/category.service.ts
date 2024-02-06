import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryRequestDTO } from 'src/app/models/categoryRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  private readonly baseUrl = "http://localhost:8080/categories"

  getCategories(): Observable<Category[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Category[]>(this.baseUrl, { headers });
  }

  createCategory(category: CategoryRequestDTO): Observable<Category> {
    console.log(category);    
    return this.http.post<Category>(this.baseUrl,category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }

  updateCategory(id: number, categoryE: Category): Observable<Category> {
    return this.http.put<Category>(this.baseUrl + '/' + id, categoryE);
  }

}
