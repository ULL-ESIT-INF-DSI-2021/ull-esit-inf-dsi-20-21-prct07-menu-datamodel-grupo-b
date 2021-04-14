import { Menu } from './classMenu';
import { Dish } from "./claseDish";

export class Commanda {
  constructor(private orders: CustomerOrder[]) { }

  getAllComandas(): CustomerOrder[] {}

  addComanda(newOrder: CustomerOrder) {}

  getDishes(): Dish[] {}

  getMenus(): Menu[] {}

};