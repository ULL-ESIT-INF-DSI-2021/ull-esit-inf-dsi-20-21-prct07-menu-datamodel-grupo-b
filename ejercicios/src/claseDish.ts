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

  getDishType(): tipoPlato {
    return this.plato;
  }
}