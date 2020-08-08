import { ShopComponent } from './application/shop/components/shop-table/shop.component'; 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './application/shop/components/product/product.component';

const routes: Routes = [
  { path: 'shops', component: ShopComponent },
  { path: 'products', component: ProductComponent }, //canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
