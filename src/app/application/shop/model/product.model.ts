export interface Product {
  name: string;
  addedBy: string;
  quantity: number;
  priority: number;// 0 sin prioridad, 1 prioridad alta, -1 prioridad baja
}

export function createProduct(name: string, addedBy: string, quantity :number, priority:number): Product {
  return {
    name,
    addedBy,
    quantity,
    priority
  };
}
