import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { LayoutUpdateHeaderAction } from '../../store/layout/layout.actions';
import { HEADER_BUTTON_TYPES } from '../../store/layout/layout.reducer';
import { ProductsBasketToggleAction } from '../../store/products/products.actions';


@Component({
  selector: 'tp-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products;
  public in_basket_filtration;
  private products$;
  private in_basket_filtration$;

  constructor(
    private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LayoutUpdateHeaderAction({
      title: 'Groceries',
      buttons: [
        HEADER_BUTTON_TYPES.EDIT,
        HEADER_BUTTON_TYPES.SETTINGS
      ]
    }));
    this.products$ = this.store.select(fromRoot.getProducts)
      .subscribe(products => this.products = products);
    this.in_basket_filtration$ = this.store.select(fromRoot.getInBasketFiltration)
      .subscribe(in_basket_filtration => this.in_basket_filtration = in_basket_filtration);
  }

  ngOnDestroy() {
    this.products$.unsubscribe();
    this.in_basket_filtration$.unsubscribe();
  }

  switchToHome(product) {
    if (product.inBasket) {
      this.store.dispatch( new ProductsBasketToggleAction({
        name: product.name,
        inBasket: false
      }));
    }
  }

  switchToBasket(product) {
    if (!product.inBasket) {
      this.store.dispatch(new ProductsBasketToggleAction({
        name: product.name,
        inBasket: true
      }));
    }
  }

}
