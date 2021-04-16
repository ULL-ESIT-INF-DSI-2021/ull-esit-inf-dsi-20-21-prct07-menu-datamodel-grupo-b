/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Desarrollo de sistemas
  * Curso: 3º
  * Editor: Visual Studio Code
  *
  * @file classOrder.ts
  * @version 1.0
  * @author Grupo B
  * @date 7 de Abril 2021
  * @brief Data model of a system that allows menu design
*/

import {Menu} from './classMenu';
import {Dish} from "./claseDish";

/**
 * @class Class Order
 */
export class CustomerOrder {
  /**
   * 
   * @param order Customer order
   * @param cantidad Amount 
   */
  constructor(
    private order: Menu | Dish, 
    private cantidad: number) {}
  
  /**
   * @brief Get command
   */
  getComanda(): Menu | Dish {return this.order;}
  
  /**
   * @brief Get amount
   */
  getCantidad(): number {return this.cantidad;}
};