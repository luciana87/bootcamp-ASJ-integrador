import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';




@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {


  constructor(private http: HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/products";
  


  getProducts(): Observable<Product[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Product[]>(this.baseUrl, { headers }).pipe(
      map(products => {
        // Convierte las fechas de string a Date
        return products.map(product => ({
          ...product,
          category: {
            ...product.category,
            created_at: new Date(product.category.createdAt),
            updated_at: new Date(product.category.updatedAt),
          },
          
        }));
      })
    );
  }


  public getProductById(id: number): Observable<Object>{
    return this.http.get(this.baseUrl + '/' + id);
  }

  public createProduct(formData: NgForm): Observable<Product> {
    console.log("service");
    console.log(formData);
    const productData = formData.value;
    return this.http.post<Product>(this.baseUrl,productData);
  }

  public updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(this.baseUrl + '/' + id, product);
  }

  public deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + '/' + id);
  }

  defaultImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }

}
