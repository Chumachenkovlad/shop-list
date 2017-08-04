import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { NgSwitch } from '@angular/common';
import { HEADER_BUTTON_TYPES } from '../../store/layout/layout.reducer';
import { RouterModule, Router } from '@angular/router';
import { ProductsAddToBufferAction, ProductsSaveFromBufferAction } from '../../store/products/products.actions';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public HEADER_BUTTON_TYPES = HEADER_BUTTON_TYPES;
  public headerData;
  private headerData$;
  constructor(
    private router: Router,
    private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.headerData$ = this.store.select(fromRoot.getHeaderData)
      .subscribe(hd => {
        console.log(hd);
        Promise.resolve(null).then(() => this.headerData = hd);
      });
  }

  ngOnDestroy() {
    this.headerData$.unsubscribe();
  }

  saveProductsFromBuffer() {
    this.store.dispatch(new ProductsSaveFromBufferAction());
  }

  saveNewProductToBuffer() {
    this.store.dispatch(new ProductsAddToBufferAction());
  }
}
