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
}