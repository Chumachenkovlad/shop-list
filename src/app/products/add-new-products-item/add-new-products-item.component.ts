import { Component, OnInit, OnDestroy, ViewChildren, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { LayoutUpdateHeaderAction } from '../../store/layout/layout.actions';
import { HEADER_BUTTON_TYPES } from '../../store/layout/layout.reducer';
import { ProductsItemComponent } from '../products-item/products-item.component';
import { InBasketPipe } from '../../shared/is-basket.pipe';
import { ProductsBasketToggleAction,
  ProductsRemoveFromBufferAction,
  ProductsUpdateNewProduct } from '../../store/products/products.actions';
import { Product } from '../../store/products/product.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';

@Component({
  selector: 'tp-add-new-products-item',
  templateUrl: './add-new-products-item.component.html',
  styleUrls: ['./add-new-products-item.component.scss']
})
export class AddNewProductsItemComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('input') nameInput;
  @Output() addNewProduct = new EventEmitter<Product>();
  name: string;
  onInput;
  private keypress$: Subscription;

  constructor(
    private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LayoutUpdateHeaderAction({
      title: 'Add new list item',
      buttons: [
        HEADER_BUTTON_TYPES.ADD_ONE,
        HEADER_BUTTON_TYPES.CANCEL_ONE
      ]
    }));
    this.keypress$ = Observable.create(observer => {
      this.onInput = value => { observer.next(value); };
    })
      .throttle(ev => Observable.interval(300)
      .subscribe(value => this.store.dispatch(new ProductsUpdateNewProduct({name: value}))));
  }

  ngAfterViewInit() {
    console.log(this.nameInput);
  }

  ngOnDestroy() {
    this.keypress$.unsubscribe();
  }
}
