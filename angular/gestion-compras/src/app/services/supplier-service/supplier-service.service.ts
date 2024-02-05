import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

import { Supplier } from 'src/app/models/supplier';
import { SupplierRequestDTO } from 'src/app/models/supplierRequestDTO';
import { SupplierResponseDTO } from 'src/app/models/supplierResponseDTO';

import { MapsUtils } from 'src/app/utils/maps';


@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  constructor(private http: HttpClient) {

  }
  private readonly baseUrl = "http://localhost:8080/suppliers";

  getSuppliers(): Observable<Supplier[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Supplier[]>(this.baseUrl, { headers });
  }

  getSupplierById(id: number): Observable<Supplier> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Supplier>(this.baseUrl + '/' + id, { headers });
  }

  getSupplierDetailById(id: number): Observable<SupplierResponseDTO> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<SupplierResponseDTO>(this.baseUrl + '/detail/' + id, { headers });
  }

  calculateAmountSuppliers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/amount");
  }
  
  createSupplier(formData: NgForm): Observable<Supplier> {
    //const supplierData = formData.value;
    console.log(formData.value);
    
    const requestData: SupplierRequestDTO = MapsUtils.mapToSupplierDTO(formData);
    console.log(requestData);
    
    return this.http.post<Supplier>(this.baseUrl,requestData);
  }

  updateSupplier(id: number, supplier: Supplier): Observable<Supplier>{
    return this.http.put<Supplier>(this.baseUrl + '/' + id, supplier);
    }

  deleteSupplier(id: number): Observable<Supplier> {
    return this.http.delete<Supplier>(this.baseUrl + '/' + id);
  }
  
  defaultImage(event: Event) {
    (event.target as HTMLImageElement).src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }
}

