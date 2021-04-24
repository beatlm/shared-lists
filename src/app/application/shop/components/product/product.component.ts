import { AuthQuery } from './../../../auth/auth.query';
import { Product, createProduct } from './../../model/product.model';
import { ShopService } from './../../state/shop.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopQuery } from '../../state/shop.query';
import { Shop } from '../../model/shop.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['product'];
  currentShop: Shop;
  listado: Observable<Product[]>; //[];
  formProduct = new FormControl('', [Validators.required]);
  prioridad = new FormControl('');

  constructor(
    private service: ShopService,
    public router: Router,
    private query: ShopQuery,
    private authQuery: AuthQuery
  ) {}

  ngOnInit() {
    this.service.syncCollection().subscribe();
    this.loadData();
  }
  private loadData() {
    this.currentShop = this.query.getEntity(this.query.getActiveId());
    this.listado = this.query.products$; 
  }

  public login() {
    this.router.navigate(['/shops']);
  }

  public addProduct() {
    //Por defecto la prioridad es 0
    const newProduct = createProduct(this.formProduct.value, this.authQuery.displayName, 1,this.prioridad.value);
    this.service.addProduct(newProduct);
    this.formProduct.reset();
    this.prioridad.reset();
  }
  public delete(product) {
    this.service.deleteProduct(product);
    console.log('Se ha eliminado:' + product);
  }
}
