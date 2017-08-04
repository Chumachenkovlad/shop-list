import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductsItemComponent } from './new-products-item/new-products-item.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { ProductsComponent } from './products/products.component';
import { InBasketPipe } from '../shared/is-basket.pipe';
import { SharedModule } from '../shared/shared.module';
import { AddNewProductsItemComponent } from './add-new-products-item/add-new-products-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ProductsItemComponent,
    ProductsComponent,
    NewProductsComponent,
    NewProductsItemComponent
  ],
  declarations: [
    ProductsItemComponent,
    ProductsComponent,
    NewProductsComponent,
    NewProductsItemComponent,
    AddNewProductsItemComponent
  ]
})
export class ProductsModule { }
