import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsItemComponent } from './products/products-item/products-item.component';
import { NewProductsComponent } from './products/new-products/new-products.component';
import { NewProductsWindowComponent } from './products/new-products-window/new-products-window.component';
import { NewProductsItemComponent } from './products/new-products-item/new-products-item.component';
import { ProductsModule } from './products/products.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/index';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import 'hammerjs';

(<any>window).TouchEmulator();

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20}
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ProductsModule,
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }