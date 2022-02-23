import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // product1: Product = { productId: 1, productName: 'kağıt', categoryId: 1, unitPrice: 5 ,unitsInStock:6};
  // product2: Product = { productId: 2, productName: 'Bardak', categoryId: 1, unitPrice: 5,unitsInStock:8 };
  // product3: Product = { productId: 3, productName: 'laptop', categoryId: 1, unitPrice: 5,unitsInStock:2 };
  // product4: Product = { productId: 4, productName: 'mouse', categoryId: 1, unitPrice: 5,unitsInStock:65 };
  // product5: Product = { productId: 5, productName: 'kamera', categoryId: 1, unitPrice: 5,unitsInStock:12 };
  dataLoaded:boolean=false;
  products: Product[] = [];
  // productResponseModel:ProductResponseModel={};
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.getProduct().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }
}
