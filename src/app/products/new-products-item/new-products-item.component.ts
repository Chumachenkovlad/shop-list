import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { Product } from '../../store/products/product.model';
import { ProductsRemoveFromBufferAction } from '../../store/products/products.actions';

@Component({
  selector: 'tp-new-products-item',
  templateUrl: './new-products-item.component.html',
  styleUrls: ['./new-products-item.component.scss']
})
export class NewProductsItemComponent implements OnInit, OnDestroy {

  @Input() newProduct: Product;
  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  removeFromBuffer() {
    this.store.dispatch(new ProductsRemoveFromBufferAction({ product: this.newProduct }));
  }

}
