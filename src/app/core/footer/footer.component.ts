import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { NgSwitch } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { getInBasketFiltration } from '../../store/products/products.reducer';
import { ProductsSwitchBasketFilterAction } from '../../store/products/products.actions';

@Component({
  selector: 'tp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  public in_basket_filtration;
  private in_basket_filtration$;
  constructor(
    private router: Router,
    private store: Store<fromRoot.AppState>
  ) { }

  ngOnInit() {
    this.in_basket_filtration$ = this.store.select(fromRoot.getInBasketFiltration)
      .subscribe(ft => {
        Promise.resolve(null).then(() => this.in_basket_filtration = ft);
      });
  }

  ngOnDestroy() {
    this.in_basket_filtration$.unsubscribe();
  }

  switchInBasketFilter(in_basket_filtration: boolean) {
    this.store.dispatch(new ProductsSwitchBasketFilterAction(in_basket_filtration));
  }

}
