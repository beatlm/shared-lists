import { ShopComponent } from './components/shop/shop.component';
import { LoginComponent } from './components/login/login.component';
import { ShopService } from './state/shop.service';
import { CommonsModule } from './../common/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductComponent } from './components/product/product.component';
import { AuthService } from './../auth/auth.service';
@NgModule({
  declarations: [ShopComponent, ProductComponent, LoginComponent],
  imports: [
  
    CommonsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [ShopService, AuthService],
})
export class ShopModule {}
