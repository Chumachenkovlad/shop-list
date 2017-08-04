import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { NewProductsComponent } from './products/new-products/new-products.component';
import { AddNewProductsItemComponent } from './products/add-new-products-item/add-new-products-item.component';
import { DontExistComponent } from './core/dont-exist/dont-exist.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
    }, {
      path: 'products',
      component: ProductsComponent,
    }, {
      path: 'products/new',
      component: NewProductsComponent,
    }, {
      path: 'products/add',
      component: AddNewProductsItemComponent,
    }, {
      path: '**',
      component: DontExistComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
