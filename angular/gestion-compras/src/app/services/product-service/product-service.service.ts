import { Injectable } from '@angular/core';
import { products } from 'src/app/data/products'; //importo mi json con la info de los products
import { Product } from 'src/app/models/Product';


const dataProducts: Product[] = products; //le asigno el json a una variable

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {

  constructor() { }
  
  mostrarData (){
    console.log(dataProducts);
  }

  getProducts(): Product[]{
    return dataProducts;
  }

  addProduct(productSend: Product){
    dataProducts.push(productSend);
    this.mostrarData();
    
  }
  
}
