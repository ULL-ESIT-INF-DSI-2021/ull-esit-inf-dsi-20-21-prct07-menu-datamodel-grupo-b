import {Dish} from './claseDish';
import {tipoPlato} from './claseDish';
import {ingredient, Ingredient} from './classIngredient';


export class Menu {
    /**
     * Attribute, as array, to save the list of menu dishes.
     */
    private dishes: Array<Dish>;

    constructor (dishes:Array<Dish>) {
        this.dishes = dishes;
    }
    /**
     * Method that adds a new Dish to the menu array.
     * @param dish New Dish 
     */
    addDish(dish: Dish) {
        this.dishes.push(dish);
    }
    /**
     * Getter method that returns the price of the meni, it is achieved
     * with the sum of the price of each Dish.
     * @returns A number with the total price
     */
    get price() {
        let sumPriceDishes = 0;
        this.dishes.forEach(element => {
            sumPriceDishes += element.totalPrice();
        });
        return sumPriceDishes.toFixed(2);
    }
    /**
     * Enter the name of the dish together with its ingredients.
     */
    dishesList() {
        let list:Array<[string, Array<[Ingredient, Number]>]> = []

        this.dishes.forEach(element => {
            list.push([element.getDishName(), element.getIngredients()]);
        });

        return list;
    }
    /**
     * Method that calculates the total nutritional composition of 
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
     * Returns an array with the list of food groups n the menu in their 
     * orden of appearance. 
     */
    foodGroupList() : Array<ingredient> {
        let list:Array<ingredient> = [];
        this.dishes.forEach(element => {
            list.push(element.predominantGroup());
            
        });
        return list;
    }
}