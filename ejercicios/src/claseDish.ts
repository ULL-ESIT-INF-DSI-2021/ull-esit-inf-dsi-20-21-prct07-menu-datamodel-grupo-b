// Clase Plato.

import {Ingredient} from './practica-7';
import {ingredient} from './practica-7';

/*
export const enum tipoPlato {'entrante', 'primer plato', 'segundo plato',
                             'postre'};
*/
//tipoPlato.['primer plato']

export const enum tipoPlato {ENTRANTE, PRIMER_PLATO, SEGUNDO_PLATO, POSTRE};              

export class Dish {
  private Ingredients: Map<Ingredient, number>;

  constructor(ingredients: [Ingredient, number][], private plato: tipoPlato ) {
    this.Ingredients = new Map;

    ingredients.forEach((element) => this.Ingredients.set(element[0],
      element[1]));
  }

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

  getDishType(): tipoPlato {
    return this.plato;
  }

  numberOfIngredients(): number {
    return this.Ingredients.size;
  }

  addIngredient(ingredient: [Ingredient, number]): void {
    // If the same exact ingredient doesn't exists inside the map.
    if(!this.Ingredients.get(ingredient[0])) {
      this.Ingredients.set(ingredient[0], ingredient[1]);
    }
  }

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
}