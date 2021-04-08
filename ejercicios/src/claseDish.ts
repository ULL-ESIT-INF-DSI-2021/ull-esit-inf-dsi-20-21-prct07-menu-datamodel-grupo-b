// Clase Plato.

import {Ingredient} from './practica-7';

export const enum topoPlato {'entrante', 'primer plato', 'segundo plato',
                             'postre'};

export const enum tipoPlato {ENTRANTE, PRIMER_PLATO, SEGUNDO_PLATO, POSTRE};              

//tipoPlato.['primer plato']

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
}