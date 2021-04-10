// Clase Plato.

import {Ingredient} from './classIngredient';
import {ingredient} from './classIngredient';

/**
 * @enum Defines what kind of dish is.
 */
export const enum tipoPlato {ENTRANTE, PRIMER_PLATO, SEGUNDO_PLATO, POSTRE};              

/**
 * A class that conforms a dish made of a series of diverse ingredients and
 * methods that let configure the dish, adding and/or removing those
 * ingredients.
 * @class class Dish
 */
export class Dish {
  /**
   * @member A Map : Keys are object of class _Ingredient_, values are the
   * weight of each ingredient (in grams).
   */
  private Ingredients: Map<Ingredient, number>;

  /**
   * @param dishName The name of the dish.
   * @param ingredients An Array (tuple of two elements). Each element presents
   * and object _Ingredient_ and a number (weight in grams).
   * @param plato The type of the dish.
   */
  constructor(private dishName: string, ingredients: [Ingredient, number][],
      private plato: tipoPlato ) {
    this.Ingredients = new Map;

    ingredients.forEach((element) => this.Ingredients.set(element[0],
      element[1]));
  }

  /**
   * A getter method which returns the dish name.
   * @returns A string with the name of the dish.
   */
  getDishName(): string {
    return this.dishName;
  }
  
  /**
   * A getter. Returns all the ingredients of the dish and each amount of these.
   * @returns An array (a tuple), in which each element is made of an object
   * _ingredient_ and a number that represents the ingredient weight in grams.
   */
  getIngredients(): [Ingredient, number][] {
    let allIngredients: [Ingredient, number][] = [];

    // We use the spread operator to convert the Map entries in array elements
    // and store in an array.
    const entries = [...this.Ingredients.entries()];

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
   * A getter returning the type of the dish.
   * @returns A enum _tipoPlato_ with the type of the dish.
   */
  getDishType(): tipoPlato {
    return this.plato;
  }

  /**
   * Returns the number of ingredients that the dish is made of.
   * @returns A _number_ representing the number of ingredients that the dish
   * consist of.
   */
  numberOfIngredients(): number {
    return this.Ingredients.size;
  }

  /**
   * Method that let us add a new ingredient to the dish. Ingredients already
   * present can not be added another time. The exact same ingredient only can
   * be added once.
   * @param ingredient A tuple of two variables: the first one is a _Ingredient_
   * objetc. The second one is a number, the grams of the ingredient.
   */
  addIngredient(ingredient: [Ingredient, number]): void {
    // If the same exact ingredient doesn't exists inside the map.
    if(!this.Ingredients.get(ingredient[0])) {
      this.Ingredients.set(ingredient[0], ingredient[1]);
    }
  }

  /**
   * Analyzes the dish aliment groups and calculates which is the more abundant.
   * @returns An _ingredient_ enum value, the more repeated of alls. Returns the
   * value -1 if there is no unique predominant group of aliments.
   */
  predominantGroup(): ingredient {
    let counters = [];
    // With this we get the number of entries in a non-string enumerable in
    // Typescript.
    let enumLength = (Object.entries(ingredient)).length / 2;
    let result: number = 0;
    let maximum: number = -1;

    // Create an array the same size enum "ingredient", full of 0's
    for(let i = 0; i < enumLength; ++i) {
      counters.push(0);
    }

    let iterator: IterableIterator<Ingredient> = this.Ingredients.keys();

    let actualElement: IteratorResult<Ingredient> = iterator.next();

    // Calculating number of ingredients by group
    while(!actualElement.done) {
      const aux = actualElement.value.getGroup();
      ++counters[aux];

      actualElement = iterator.next();
    }

    // Getting the maximum value of the array and its 
    // supossedly position 
    for(let i = 0; i < counters.length; ++i) {
      if(counters[i]> maximum) {
        maximum = counters[i];
        result = i;
      }
    }

    // Checking if the maximum value is unique
    function checkMaximumUnique(valuePosition: number) {
      return valuePosition == maximum;
    }
    
    // If there is more than a maximum value... there is no
    // maximum value in reality.
    if (counters.filter(checkMaximumUnique).length > 1) {
      return -1;
    }

    return result;
  }

  /**
   * Calculates the total dish nutritional composition. Totals of carbohydrates,
   * proteins and lipids
   * @returns An array with the carbohydrates total (1º element), proteins total
   * (2º element) and lipids total (3º element).
   * total.
   */
  nutritionalComposition(): [number, number, number] {
    const entries = [...this.Ingredients.entries()];


    let totalCarbohydrates = 0; 
    let totalProteins = 0;
    let totalLipids = 0;

    entries.forEach((element) => {
      totalCarbohydrates += (element[0].getCarbohydrates() / 100) * element[1];
      totalProteins += (element[0].getProteins() / 100) * element[1];
      totalLipids += (element[0].getLipids() / 100) * element[1];
    });

    return [totalCarbohydrates, totalProteins, totalLipids];
  }

  /**
   * Calculates the dish total price based in the cost of each ingredient used.
   * @returns The raw total price of the dish : A sum of each ingredient cost
   * by weight (euros by kilogram used).
   */
  totalPrice(): number {
    const entries = [...this.Ingredients.entries()];
    let total = 0;

    entries.forEach((element) => {
      total += (element[1] / 1000) * element[0].getPrice();
    });

    return total;
  }

  /**
   * Remove all dish ingredients whose name match the argument passed by this
   * method. 
   * @param ingredientName Name of the ingredient we want to remove from the
   * dish.
   */
  deleteIngredientByName(ingredientName: string): void {
    let ingredientsToRemove: Ingredient[] = [];
    const entries = [...this.Ingredients.entries()];

    // Get all the ingredients with the same name as the argument and store
    // them in an array.
    entries.forEach((element) => {
      if(element[0].getName() == ingredientName) {
        ingredientsToRemove.push(element[0]);
      }
    });

    for(let i = 0; i < ingredientsToRemove.length; ++i) {
      this.Ingredients.delete(ingredientsToRemove[i]);
    }
  }

  /**
   * Removes the ingredient from the dish  
   * @param ingr An _Ingredient_ object. Deletes the exact match of that object
   * in the dish if it exists.
   */
  deleteIngredient(ingr: Ingredient): void {
    this.Ingredients.delete(ingr);
  }
}