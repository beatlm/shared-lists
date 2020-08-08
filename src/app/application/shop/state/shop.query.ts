import { Query, QueryEntity } from '@datorama/akita';
import { ShopState, ShopStore } from './shop.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShopQuery extends QueryEntity<ShopState> {
  allShop$ = this.selectAll();
  allShop = this.getAll();
  shopsNumber$ = this.selectCount();
  productsNumber$ = this.select((state) => {
    state.products.length;
  });
  products$ = this.selectActive((shop) => shop.products);
  constructor(protected store: ShopStore) {
    super(store);
  }
}
