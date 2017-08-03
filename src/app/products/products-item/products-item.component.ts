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
        transform: `translateX(540px)`
      })),
      transition('basket <=> home', animate('100ms ease-in'))
    ]),
    trigger('nameState', [
      state('basket', style({
        transform: 'translateX(0)',
      })),
      state('home', style({
        transform: `translateX(-100px)`,
      })),
      transition('basket <=> home', animate('100ms ease-in'))
    ])
  ]

})
export class ProductsItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() product: Product;
  private animationState;
  constructor(
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  getAnimationState() {
    return this.animationState = (this.product.inBasket) ? 'basket' : 'home';
  }

}
