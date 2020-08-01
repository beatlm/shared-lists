import { Store, StoreConfig } from '@datorama/akita';

export interface ShopState {
  name: string;
  image: string;
  owner: Array<String>;
  products: Array<String>;
}

export function createInitialState(): ShopState {
  return {
    name: '',
    image: '',
    owner: new Array<String>(),
    products: new Array<String>(),
  };
}

@StoreConfig({ name: 'shop' ,resettable: false})
export class ShopStore extends Store<ShopState> {
  constructor() {
    super(createInitialState());
  }
}
