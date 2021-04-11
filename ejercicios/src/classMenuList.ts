import {Menu} from "./classMenu";
import {Dish} from './claseDish';

export class MenuList {
  /**
   * Attribute, as array, to save the list of menus.
   */
  private menus: Array<Menu>;
  /**
   * Attribute, as array, to save the list of dishes.
   */
  private dishes: Array<Dish>;

  /**
   * Constructor method
   * @param {Array<Menu>} menus Array of the menus of the menu list
   * @param {Array<Dish>} dishes Array of the dishes of the menu list
   */
  constructor(menus: Array<Menu>, dishes: Array<Dish>) {
    this.menus = menus;
    this.dishes = dishes;
  }

  /**
   * Method that allow us to add a new menu to the menu list
   * @param {Menu} menu New menu 
   */
  addMenu(menu: Menu) {
    this.menus.push(menu);
  }

  /**
   * Method that allow us to add a new dish to the menu list
   * @param {Dish} dish New dish
   */
  addDish(dish: Dish) {
    this.dishes.push(dish);
  }

  /**
   * Getter method  that return us the array of menus of our menu list
   * @returns {Array<Menu>} Array with the menus
   */
  getMenus(): Array<Menu> {
    return this.menus;
  }

  /**
   * Getter method  that return us the array of dishes of our menu list
   * @returns {Array<Dish>} Array of the dishes
   */
  getDishes(): Array<Dish> {
    return this.dishes;
  }

  /**
   * Method to create a new menu with some of the 
   * existing dishes in our menu list
   * @param {Array<Dish>} numberDishes Array that indicate the number of the dishes
   * that we want to put in our new menu
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
