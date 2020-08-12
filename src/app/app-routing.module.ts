import { RegisterComponent } from './application/shop/components/register/register.component';
import { LoginComponent } from './application/shop/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './application/shop/components/product/product.component';
import { ShopComponent } from './application/shop/components/shop/shop.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shops', component: ShopComponent },
  { path: 'products', component: ProductComponent }, //canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
