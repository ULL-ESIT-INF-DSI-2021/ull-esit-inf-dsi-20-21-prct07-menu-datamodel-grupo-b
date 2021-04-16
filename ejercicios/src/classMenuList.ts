/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Desarrollo de sistemas
  * Curso: 3º
  * Editor: Visual Studio Code
  *
  * @file classMenuList.ts
  * @version 1.0
  * @author Grupo B
  * @date 7 de Abril 2021
  * @brief Data model of a system that allows menu design
*/

import {Menu} from "./classMenu";
import {Dish} from './claseDish';

/**
 * @brief Class that implements a menu list with many different 
 * types of menus and dishes, with some options as add 
 * more dishes or menus or create a new menu with some
 * of the different dishes in our menu list.
 * @class class MenuList
 */
export class MenuList {
  /**
   * @brief Attribute, as array, to save the list of menus.
   */
  private menus: Array<Menu>;
  /**
   * @brief Attribute, as array, to save the list of dishes.
   */
  private dishes: Array<Dish>;

  /**
   * @brief Constructor method.
   * @param {Array<Menu>} menus Array of the menus of the menu list.
   * @param {Array<Dish>} dishes Array of the dishes of the menu list.
   */
  constructor(menus: Array<Menu>, dishes: Array<Dish>) {
    this.menus = menus;
    this.dishes = dishes;
  }

  /**
   * @brief Method that allow us to add a new menu to the menu list.
   * @param {Menu} menu New menu.
   */
  addMenu(menu: Menu) {
    this.menus.push(menu);
  }

  /**
   * @brief Method that allow us to add a new dish to the menu list.
   * @param {Dish} dish New dish.
   */
  addDish(dish: Dish) {
    this.dishes.push(dish);
  }

  /**
   * @brief Getter method  that return us the array of menus of our menu list.
   * @returns {Array<Menu>} Array with the menus.
   */
  getMenus(): Array<Menu> {
    return this.menus;
  }

  /**
   * @brief Getter method  that return us the array of dishes of our menu list.
   * @returns {Array<Dish>} Array of the dishes.
   */
  getDishes(): Array<Dish> {
    return this.dishes;
  }

  /**
   * @brief Method to create a new menu with some of the 
   * existing dishes in our menu list.
   * @param {Array<Dish>} numberDishes Array that indicate the number of the dishes
   * that we want to put in our new menu.
   */
  newMenu(numberDishes: Array<number>) {
    let dishes: Array<Dish> = [];
    
    numberDishes.forEach(dish => {
      dishes.push(this.dishes[dish - 1]);
    });
    let menu = new Menu(dishes);

    this.addMenu(menu);
  }
}
