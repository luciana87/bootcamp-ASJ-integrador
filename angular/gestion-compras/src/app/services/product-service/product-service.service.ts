import { Injectable } from '@angular/core';
import { products } from 'src/app/data/products'; //importo mi json con la info de los products


const dataProducts = products; //le asigno el json a una variable

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product!: {};

  constructor() { }
  
  mostrarData (){
    
    console.log(dataProducts);
  }

  getProducts(){
    return dataProducts;
  }

  addProduct(productSend: {}){
    this.product = productSend;
    dataProducts.push(this.product);
  }
  
}
