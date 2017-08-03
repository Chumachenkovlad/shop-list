import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductsItemComponent } from './new-products-item/new-products-item.component';
import { NewProductsWindowComponent } from './new-products-window/new-products-window.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { ProductsComponent } from './products/products.component';
import { InBasketPipe } from '../shared/is-basket.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductsItemComponent,
    ProductsComponent,
    NewProductsComponent,
    NewProductsWindowComponent,
    NewProductsItemComponent
  ],
  declarations: [
    ProductsItemComponent,
    ProductsComponent,
    NewProductsComponent,
    NewProductsWindowComponent,
    NewProductsItemComponent
  ]
})
export class ProductsModule { }
