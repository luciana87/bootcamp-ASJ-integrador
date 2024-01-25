import { Injectable } from '@angular/core';
import { products } from 'src/app/data/products'; //importo mi json con la info de los products
import { Product } from 'src/app/models/product';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


//const dataProducts: Product[] = products; //le asigno el json a una variable

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  id!: number;

  constructor(private http: HttpClient) {

    // let products = this.getProducts(); // Le asigno lo que venga del localStorage
    // if (products.length == 0) { // Si está vacío el [], no hay elementos en el localStorage
    //   products = dataProducts; //Le asigno mi JSON
    //   localStorage.setItem("products", JSON.stringify(dataProducts)) //Agrego al localStorage lo que tengo en mi JSON
    // }
    // let lastProduct = products[products.length -1]
    // this.id = lastProduct.id
  }
  
  // getProducts(): Observable<Product[]> {
  //   const headers = { 'Content-Type': 'application/json' };
  //   return this.http.get<Product[]>('http://localhost:8080/products',{headers});
  // }

  getProducts(): Observable<Product[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Product[]>('http://localhost:8080/products', { headers }).pipe(
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
  // getProducts(): Product[]{
  //   // return dataProducts;
  //   let products = localStorage.getItem('products')
  //   return (products !== null) ? JSON.parse(products) : [];
  // }

  // getProducts(): Product[]{
  //   // return dataProducts;
  //   let products = localStorage.getItem('products')
  //   return (products !== null) ? JSON.parse(products) : [];
  // }

  // getProductById(id: number) {
  //   let products = this.getProducts()
  //   return products.find((product) => product.id == id);
  // }

  public getProductById(id: number): Observable<Object>{
    return this.http.get('http://localhost:8080/products/'+id)
  }

  // createProduct(product: Product){
  //   this.id += 1;
  //   product.id = this.id;
  //   let products = this.getProducts();
  //   products.push(product);
  //   localStorage.setItem('products', JSON.stringify(products));
  //   this.mostrarData();

    //Sin LocalStorage
    // dataProducts.push(product);
    // this.mostrarData();
  //}

  // updateProduct(product: Product) {
  //   let products = this.getProducts();
  //   let index = products.findIndex(prod => prod.id == product.id);
  //   products[index] = product;
  //   localStorage.setItem('products', JSON.stringify(products));

  //   this.mostrarData();
  // }

  // deleteProduct(product: Product) {
  //   let products = this.getProducts();
  //   const index = products.findIndex(prod => prod.id == product.id);
  //   if (index > -1) {
  //     products.splice(index, 1);
  //     localStorage.setItem('products', JSON.stringify(products)); 
  //   }
  //   this.mostrarData();
  // }

  defaultImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }

}
