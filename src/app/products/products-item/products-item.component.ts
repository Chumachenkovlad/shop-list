import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { Product } from '../../store/products/product.model';

const WIDTH = '100px';

@Component({
  selector: 'tp-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
  animations: [
    trigger('iconState', [
      state('basket', style({
        transform: 'translateX(0)',
      })),
      state('home', style({
        transform: `translateX(var(--m-max-size))`
      })),
      transition('basket <=> home', animate('100ms ease-in'))
    ]),
    trigger('nameState', [
      state('basket', style({
        transform: 'translateX(0)',
      })),
      state('home', style({
        transform: `translateX(calc(-1 * var(--b-size)))`,
      })),
      transition('basket <=> home', animate('100ms ease-in'))
    ])
  ]

})
export class ProductsItemComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  private animationState;
  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  getAnimationState() {
    return this.animationState = (this.product.inBasket) ? 'basket' : 'home';
  }

}
