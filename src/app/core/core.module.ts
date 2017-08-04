import { NgModule } from '@angular/core';
import { NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DontExistComponent } from './dont-exist/dont-exist.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
    DontExistComponent
  ]
})
export class CoreModule { }
