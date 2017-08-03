import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products/products.component';
import { NewProductsComponent } from './products/new-products/new-products.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
    }, {
      path: 'products',
      component: ProductsComponent,
    }, {
      path: 'products/edit',
      component: NewProductsComponent,
    }, {
      path: '**',
      component: ProductsComponent,
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
