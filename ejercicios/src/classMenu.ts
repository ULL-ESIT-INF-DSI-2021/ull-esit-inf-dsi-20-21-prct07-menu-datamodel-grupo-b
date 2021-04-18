/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Desarrollo de sistemas
  * Curso: 3º
  * Editor: Visual Studio Code
  *
  * @file classMenu.ts
  * @version 1.0
  * @author Grupo B
  * @date 7 de Abril 2021
  * @brief Data model of a system that allows menu design
*/
import {Dish} from './claseDish';
import {tipoPlato} from './claseDish';
import {ingredientGroups, Ingredient} from './classIngredient';


export class Menu {
    /**
     * @brief Attribute, as array, to save the list of menu dishes.
     */
    private dishes: Array<Dish>;

    constructor(dishes:Array<Dish>) {
        this.dishes = dishes;
    }
    /**
     * @brief Method that adds a new Dish to the menu array.
     * @param dish New Dish 
     */
    addDish(dish: Dish) {
        this.dishes.push(dish);
    }

    /**
     * @brief Getter method that return the array of dishes of the menu
     * @returns {Array<Dish>} Array of dishes
     */
    getDishes(): Array<Dish> {
        return this.dishes;
    }
    /**
     * @brief Getter method that returns the price of the meni, it is achieved
     * with the sum of the price of each Dish.
     * @returns A number with the total price
     */
    getprice() {
        let sumPriceDishes = 0;
        this.dishes.forEach(element => {
            sumPriceDishes += element.totalPrice();
        });
        return sumPriceDishes.toFixed(2);
    }
    /**
     * @brief Enter the name of the dish together with its ingredients.
     */
    dishesList() {
        let list:Array<[string, Array<[Ingredient, Number]>]> = [];

        this.dishes.forEach(element => {
            list.push([element.getDishName(), element.getIngredients()]);
        });

        return list;
    }
    /**
     * @brief Method that calculates the total nutritional composition of 
     * the menu based on that of each dish.
     * @returns Returns an array with [carbohydrates, proteins, lipids]
     */
    nutritionalComposition() :Array<number> {
        let composition : Array<number> = [0, 0, 0];
        this.dishes.forEach(element => {
            composition[0] += element.nutritionalComposition()[0];
            composition[1] += element.nutritionalComposition()[1];
            composition[2] += element.nutritionalComposition()[2];
        });
        return composition;
    }
    /**
     * @brief Returns an array with the list of food groups n the menu in their 
     * orden of appearance. 
     */
    foodGroupList() : Array<ingredientGroups> {
        let list:Array<ingredientGroups> = [];
        this.dishes.forEach(element => {
            list.push(element.predominantGroup());
        });
        return list;
    }
}