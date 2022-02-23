import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:7456/Api/Products/GetProducts';
  constructor(private httpClient:HttpClient) { }
  getProduct() :Observable<ListResponseModel<Product>>{
     return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
     
  }
}
