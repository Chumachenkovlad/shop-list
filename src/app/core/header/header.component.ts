import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/index';
import { NgSwitch } from '@angular/common';
import { HEADER_TYPES } from '../../store/layout/layout.reducer';
import { RouterModule, Router } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ProductsAddToBufferAction, ProductsSaveFromBufferAction } from '../../store/products/products.actions';
import { NewProductsWindowComponent } from '../new-products-window/new-products-window.component';

@Component({
  selector: 'tp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public HEADER_TYPES;
  public headerType;
  private headerType$;
  constructor(
    public dialog: MdDialog,
    private router: Router,
    private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.HEADER_TYPES = HEADER_TYPES;
    this.headerType$ = this.store.select(fromRoot.getHeaderType)
      .subscribe(ht => this.headerType = ht);
  }

  ngOnDestroy() {
    this.headerType$.unsubscribe();
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(NewProductsWindowComponent);
  //   dialogRef.afterClosed().subscribe(name => {
  //     this.store.dispatch(new ProductsAddToBufferAction({ name }));
  //   });
  // }

  saveProductsFromBuffer() {
    this.store.dispatch(new ProductsSaveFromBufferAction());
  }
}
