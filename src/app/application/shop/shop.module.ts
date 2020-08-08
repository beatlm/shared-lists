import { ShopService } from './state/shop.service';
import { CommonsModule } from './../common/commons.module';
import { TableModule } from './../common/components/table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ShopComponent } from './components/shop-table/shop.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import{ProductComponent} from './components/product/product.component'
@NgModule({
  declarations: [ShopComponent,ProductComponent],
  imports: [
    CommonsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [ShopComponent, ShopService],
})
export class ShopModule {}
