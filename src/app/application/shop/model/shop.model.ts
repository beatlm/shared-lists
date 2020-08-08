import { Product } from './product.model';
import { ID } from '@datorama/akita';

export type Shop = {
  id?: ID;
  name: string;
  image?: string;
  owner?: Array<String>;
  products?: Product[];
}

export function createShop({ id,name }): Shop {
  return {
    id,
    name,
    owner: [],
    products:[],
    image:''
  };
}