export interface Product {
  name: string;
  addedBy: string;
  quantity: number;
}

export function createProduct(name: string, addedBy: string, quantity :number): Product {
  return {
    name,
    addedBy,
    quantity,
  };
}
