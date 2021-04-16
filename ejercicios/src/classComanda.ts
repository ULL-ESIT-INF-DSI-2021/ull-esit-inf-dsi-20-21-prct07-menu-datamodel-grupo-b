/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Desarrollo de sistemas
  * Curso: 3º
  * Editor: Visual Studio Code
  *
  * @file classComanda.ts
  * @version 1.0
  * @author Grupo B
  * @date 7 de Abril 2021
  * @brief Data model of a system that allows menu design
*/

import {CustomerOrder} from "./classOrder";
import {Menu} from './classMenu';
import {Dish} from "./claseDish";

/**
 * @class Class Commanda
 */
export class Commanda {
  /**
   * 
   * @param orders orders placed at the command
   */
  constructor(private orders: CustomerOrder[]) { }

  /**
   * @brief Get commands
   */
  getAllComandas(): CustomerOrder[] {
    return this.orders;
  }

  /**
   * 
   * @brief Add a new order to the command
   * @param newOrder New order of the command
   */
  addComanda(newOrder: CustomerOrder) {
    this.orders = this.orders.concat(newOrder);
  }

  /**
   * @brief Get dishes 
   */
  getDishes(): Dish[] {
    return this.orders.filter(
      (or) => or instanceof Dish)
      .map((or) => or.getComanda()) as Dish[];
  }

  /**
   * @brief Get menu
   */
  getMenus(): Menu[] {
    return this.orders.filter(
      (or) => or instanceof Menu)
      .map((or) => or.getComanda()) as Menu[];
  }
};