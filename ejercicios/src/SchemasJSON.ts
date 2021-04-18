import {Dish, tipoPlato} from './claseDish';
import {Ingredient, ingredientGroups} from './classIngredient';
import {Menu} from './classMenu';
import {MenuList} from './classMenuList';

export type IngredientJSON = {
  name: string,
  location: string,
  group :number,
  carbohydrates : number,
  lipids : number,
  protein: number,
  kcal: number,
  price: number
};

export type DishJSON = {
  name: string,
  ingredient: IngredientJSON[],
  type: string
};

export type MenuJSON = {
  name: string,
  diches: DishJSON[],
  price: number
};
