import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:7456/Api/';
  constructor(private httpClient:HttpClient) { }
  getProduct() :Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"Products/GetProducts";
     return this.httpClient.get<ListResponseModel<Product>>(newPath);
     
  }
  getProductByCategoryId(categoryId:number) :Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"Products/GetByCategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    
 }
}
