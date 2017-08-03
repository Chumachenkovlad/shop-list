import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InBasketPipe } from './is-basket.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InBasketPipe
  ],
  exports: [
    InBasketPipe
  ]
})
export class SharedModule { }
