import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Models/product';
import { CartService } from 'src/app/services/cart.service';
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
  filterText:string="";
  // productResponseModel:ProductResponseModel={};
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
    
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductByCategoryId(params["categoryId"]);
      }else{
        this.getProduct();
      }
    })
   
  }
  getProduct() {
    this.productService.getProduct().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }
  getProductByCategoryId(categoryId:number) {
    this.productService.getProductByCategoryId(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })
  }
  addToCart(product:Product){
    if(product.productId===1){
      this.toastrService.error("Hata","Bu ürün sepete eklenemez");
    }else{
      this.toastrService.success("Sepete Eklendi",product.productName);
      this.cartService.addToCart(product)
    }
    
  }
}
