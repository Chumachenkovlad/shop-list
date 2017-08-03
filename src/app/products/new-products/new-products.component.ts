import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { LayoutUpdateHeaderAction } from '../../store/layout/layout.actions';
import { HEADER_TYPES } from '../../store/layout/layout.reducer';
import { ProductsItemComponent } from '../products-item/products-item.component';
import { InBasketPipe } from '../../shared/is-basket.pipe';
import { ProductsBasketToggleAction } from '../../store/products/products.actions';

@Component({
  selector: 'tp-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit, OnDestroy {
  public newProducts;
  private newProducts$;
  constructor(
    private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LayoutUpdateHeaderAction(HEADER_TYPES.PRODUCTS));
    this.newProducts$ = this.store.select(fromRoot.getProductsBuffer)
      .subscribe(newProducts => this.newProducts = newProducts);
  }
  ngOnDestroy() {
    this.newProducts$.unsubscribe();
  }
  switchToBasket() {
    this.store.dispatch(new ProductsBasketToggleAction(true));
  }
  switchToHome() {
    this.store.dispatch(new ProductsBasketToggleAction(false));
  }


}
