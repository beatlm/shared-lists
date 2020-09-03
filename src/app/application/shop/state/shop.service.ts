import { ShopQuery } from './shop.query';
import { Shop } from './../model/shop.model';
import { Product } from '../model/product.model';
import { ShopStore, ShopState } from './shop.store';
import { arrayAdd, ID, arrayRemove } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { CollectionService, CollectionConfig } from 'akita-ng-fire';

@CollectionConfig({ path: 'shops' })
@Injectable({ providedIn: 'root' })
export class ShopService extends CollectionService<ShopState> {
  shopsCollection: AngularFirestoreCollection;

  constructor(public query: ShopQuery, public shopStore: ShopStore) {
    super(shopStore);
  }

  fetch() {
    this.shopsCollection
      .valueChanges({ idField: 'id', name: 'name' })
      .subscribe((shops: Shop[]) => {
        this.shopStore.set(shops);
      });
  }

  setActive(shop: ID) {
    this.shopStore.setActive(shop);
  }
  //Adds a new product to active shop
  addProduct(newProduct: Product) {
    const array = this.query.getActive().products;
    this.update({
      id: this.query.getActiveId(),
      products: arrayAdd(array, newProduct),
    });
  }
  //Deletes the product from active shop
  deleteProduct(productName: string, shopId?: ID) {
    var productsArray = [...this.query.getActive().products];
    const ind=productsArray.findIndex((product)=>product.name===productName);
    productsArray.splice(ind,1);
    this.update({
      id: this.query.getActiveId(),
      products: productsArray,
    });
  }


}
