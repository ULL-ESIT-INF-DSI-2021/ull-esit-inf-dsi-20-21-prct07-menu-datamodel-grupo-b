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
import {Dish, tipoPlato} from './claseDish';
import {Ingredient} from "./classIngredient";

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
  // public menus: Array<Menu>;
  // /**
  //  * @brief Attribute, as array, to save the list of dishes.
  //  */
  // public dishes: Array<Dish>;

  // public ingredients: Array<Ingredient>;

  public menus: Map<number, Menu>;
  public dishes: Map<string, Dish>;
  public ingredients: Map<string, Ingredient>;
  protected numberMenus: number = 0;
  /**
   * @brief Constructor method.
   * @param {Array<Menu>} menus Array of the menus of the menu list.
   * @param {Array<Dish>} dishes Array of the dishes of the menu list.
   */
  constructor(menus: Array<Menu>, dishes: Array<Dish>, ingredients: Array<Ingredient>) {
    // this.menus = menus;
    // this.dishes = dishes;
    // this.ingredients = ingredients;
    this.menus = new Map;

    menus.forEach((element) => this.menus.set(this.numberMenus + 1,
      element));
    
    this.numberMenus = this.numberMenus + 1;
    
    this.dishes = new Map;
    
    dishes.forEach((element) => this.dishes.set(element.getDishName(),
    element));

    this.ingredients = new Map;
  
    ingredients.forEach((element) => this.ingredients.set(element.getName(),
      element));
  }

  /**
   * @brief Method that allow us to add a new menu to the menu list.
   * @param {Menu} menu New menu.
   */
  addMenu(menu: Menu) {
    this.menus.set(this.numberMenus + 1, menu);

    this.numberMenus = this.numberMenus + 1;
  }

  /**
   * @brief Method that allow us to add a new dish to the menu list.
   * @param {Dish} dish New dish.
   */
  addDish(dish: Dish) {
    this.dishes.set(dish.getDishName(), dish);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.set(ingredient.getName(), ingredient);
  }

  /**
   * @brief Getter method  that return us the array of menus of our menu list.
   * @returns {Array<Menu>} Array with the menus.
   */
  getMenus(): [number, Menu][] {
    let allMenus: [number, Menu][] = [];

    // We use the spread operator to convert the Map entries in array elements
    // and store in an array.
    const entries = [...this.menus.entries()];

    for(let i = 0; i < entries.length; ++i) {
      allMenus.push(entries[i]);
    }

    // Another way to convert a Map to a tuple array.
    /*
    for(let[key, value] of this.Ingredients) {
      allIngredients.push([key, value]);
    }
    */

    return allMenus;
  }

  /**
   * @brief Getter method  that return us the array of dishes of our menu list.
   * @returns {Array<Dish>} Array of the dishes.
   */
  getDishes(): [string, Dish][] {
    let allDishes: [string, Dish][] = [];

    // We use the spread operator to convert the Map entries in array elements
    // and store in an array.
    const entries = [...this.dishes.entries()];

    for(let i = 0; i < entries.length; ++i) {
      allDishes.push(entries[i]);
    }

    // Another way to convert a Map to a tuple array.
    /*
    for(let[key, value] of this.Ingredients) {
      allIngredients.push([key, value]);
    }
    */

    return allDishes;
  }

  getIngredients(): [string, Ingredient][] {
    let allIngredients: [string, Ingredient][] = [];

    // We use the spread operator to convert the Map entries in array elements
    // and store in an array.
    const entries = [...this.ingredients.entries()];

    for(let i = 0; i < entries.length; ++i) {
      allIngredients.push(entries[i]);
    }

    // Another way to convert a Map to a tuple array.
    /*
    for(let[key, value] of this.Ingredients) {
      allIngredients.push([key, value]);
    }
    */

    return allIngredients;
  }
  /**
   * @brief Method to create a new menu with some of the 
   * existing dishes in our menu list.
   * @param {Array<Dish>} numberDishes Array that indicate the number of the dishes
   * that we want to put in our new menu.
   */
  // newMenu(numberDishes: Array<number>) {
  //   let dishes: Array<Dish> = [];
    
  //   numberDishes.forEach(dish => {
  //     dishes.push(this.dishes.get(), this.dishes[dish - 1]);
  //   });
  //   let menu = new Menu(dishes);

  //   this.addMenu(menu);
  // }
}
