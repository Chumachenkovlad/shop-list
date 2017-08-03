import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../store/products/product.model';

@Pipe({
  name: 'inBasket'
})
export class InBasketPipe implements PipeTransform {

  transform(products: Product[], args: boolean): Product[] {
    return (args) ? products.filter(p => p.inBasket) : products;
  }

}
