import {
  StoreConfig,
  EntityState,
  EntityStore,
  ActiveState,
} from '@datorama/akita';
import { Shop } from '../model/shop.model';
import { Injectable } from '@angular/core';

export interface ShopState extends EntityState<Shop>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'shop', resettable: false, idKey: 'id' })
export class ShopStore extends EntityStore<ShopState, Shop> {
  constructor() {
    super();
  }
}
