import { ShopStore } from './shop.store';

export class ShopService {
  constructor(private shopStore: ShopStore) {}

  updateOwner(newOwner: string) {
    var modifiedOwner = this.shopStore.getValue().owner;
    modifiedOwner.push(newOwner);
    this.shopStore.update({ owner: modifiedOwner });
  }
  updateShopName(newName: string) {
    this.shopStore.update({ name: newName });
  }
}
