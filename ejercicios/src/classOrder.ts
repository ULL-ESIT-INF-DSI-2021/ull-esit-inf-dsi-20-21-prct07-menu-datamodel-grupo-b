import { Menu } from './classMenu';
import { Dish } from "./claseDish";

export class CustomerOrder {
  constructor(
    private order: Menu | Dish, 
    private cantidad: number) {}

  getComanda(): Menu | Dish { return this.order; }

  getCantidad(): number { return this.cantidad; }
};