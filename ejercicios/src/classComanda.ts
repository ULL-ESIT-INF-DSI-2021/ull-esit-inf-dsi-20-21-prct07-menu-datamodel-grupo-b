import { CustomerOrder } from "./classOrder";
import { Menu } from './classMenu';
import { Dish } from "./claseDish";

export class Commanda {
  constructor(private orders: CustomerOrder[]) { }

  getAllComandas(): CustomerOrder[] {
    return this.orders;
  }

  addComanda(newOrder: CustomerOrder) {
    this.orders = this.orders.concat(newOrder);
  }

  getDishes(): Dish[] {
    return this.orders.filter(
      (or) => or instanceof Dish)
      .map((or) => or.getComanda()) as Dish[];
  }

  getMenus(): Menu[] {
    return this.orders.filter(
      (or) => or instanceof Menu)
      .map((or) => or.getComanda()) as Menu[];
  }

};