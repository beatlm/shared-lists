import { Query } from '@datorama/akita';
import { ShopState, ShopStore } from './shop.store';

export class ShopQuery extends Query<ShopState> {
  allState$ = this.select();
  productsNumber$ = this.select((state) => {
    state.products.length;
  });
  products$ = this.select('products');

  constructor(protected store: ShopStore) {
    super(store);
  }
}
