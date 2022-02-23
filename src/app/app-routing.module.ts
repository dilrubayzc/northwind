import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Components/category/category.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
 { path:"",pathMatch:"full",component:ProductComponent},
 {path:"product",component:ProductComponent},
 {path:"products/category/:categoryId",component:ProductComponent}//getbycategory için yazılan route 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
