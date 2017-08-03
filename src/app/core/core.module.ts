import { NgModule } from '@angular/core';
import { NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { MdDialogModule } from '@angular/material';
import { NewProductsWindowComponent } from './new-products-window/new-products-window.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdDialogModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NewProductsWindowComponent
  ],
  entryComponents: [
    NewProductsWindowComponent
  ]
})
export class CoreModule { }
