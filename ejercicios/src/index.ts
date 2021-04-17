import {Dish, tipoPlato} from './claseDish';
import {Commanda} from './classComanda';
import {Ingredient} from './classIngredient';
import {Menu} from './classMenu';
import {MenuList} from './classMenuList';
import {CustomerOrder} from './classOrder';
import * as inquirer from 'inquirer';
import {JsonMenuList} from "./jsonMenuList"; 

const ingr1 = new Ingredient('tomates', 'La Matanza', 4, 16, 12, 18, 32, 1.02);
const ingr2 = new Ingredient('ajos', 'La Orotava', 1, 22, 24, 26, 17, 0.62);
const ingr3 = new Ingredient('chocolate', 'Tegueste', 1, 32, 40, 16, 9, 1.79);
const ingr4 = new Ingredient('espaguetis', 'La Matanza', 3, 11, 12, 15, 32, 1.02);
const ingr5 = new Ingredient('bistec', 'La Matanza', 3, 11, 12, 15, 32, 3.2);
const dish1 = new Dish('Espaguetis en salsa', [[ingr1, 12], [ingr4, 80]], tipoPlato.PRIMER_PLATO);
const dish2 = new Dish('Tomates aliñados', [[ingr1, 175]], tipoPlato.ENTRANTE);
const dish3 = new Dish('Natilla chocolate', [[ingr3, 175]], tipoPlato.POSTRE);
const dish4 = new Dish('Bistec a la plancha', [[ingr5, 175]], tipoPlato.SEGUNDO_PLATO);
const dish5 = new Dish('Mousse chocolate', [[ingr3, 175]], tipoPlato.POSTRE);
const dish6 = new Dish('Bistec al ajillo', [[ingr5, 175], [ingr2, 10]], tipoPlato.SEGUNDO_PLATO);


let ingredientes : Ingredient[] = [
  new Ingredient('tomates', 'La Matanza', 4, 16, 12, 18, 32, 1.02),
  new Ingredient('ajos', 'La Orotava', 1, 22, 24, 26, 17, 0.62),
  new Ingredient('albahaca', 'Tegueste', 1, 32, 40, 16, 9, 1.79),
  new Ingredient('espaguetis', 'La Matanza', 3, 11, 12, 15, 32, 1.02)];
let dishes : Dish[] = [
  new Dish('Espaguetis en salsa', [[new Ingredient('tomates', 'La Matanza', 4, 16, 12, 18, 32, 1.02), 12], [ new Ingredient('espaguetis', 'La Matanza', 3, 11, 12, 15, 32, 1.02), 80]], tipoPlato.PRIMER_PLATO),
  new Dish('Tomates aliñados', [[ingr1, 175]], tipoPlato.ENTRANTE),
  new Dish('Natilla chocolate', [[ingr3, 175]], tipoPlato.POSTRE),
  new Dish('Bistec a la plancha', [[ingr5, 175]], tipoPlato.SEGUNDO_PLATO),
  new Dish('Mousse chocolate', [[ingr3, 175]], tipoPlato.POSTRE),
  new Dish('Bistec al ajillo', [[ingr5, 175], [ingr2, 10]], tipoPlato.SEGUNDO_PLATO)];
let menus : Menu[] = [
  new Menu([dish2, dish1, dish4, dish5]),
  new Menu([dish2, dish1, dish3, dish5]),
  new Menu([dish2, dish4, dish5])];

let collection : MenuList = new JsonMenuList(menus, dishes, ingredientes);
console.log(collection.getDishes());
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');


// const adapter = new FileSync('db.json');
// const db = low(adapter);

// // Set some defaults
// db.defaults({ingredient: []})
//   .write()

// // Add a ingredient
// db.get('tomates')
//   .push({name: 'tomates', location: 'La Matanza', group: 4, carbohydrates: 16, protein: 12, lipids: 18, kcal: 32, price: 1.02})
//   .write()

// db.get('ajos')
//   .push({name: 'ajos', location: 'La Orotava', group: 1, carbohydrates: 22, protein: 24, lipids: 26, kcal: 17, price: 0.62})
//   .write()

// db.get('albahaca')
//   .push({name: 'albahaca', location: 'Tegueste', group: 1, carbohydrates: 32, protein: 40, lipids: 16, kcal: 9, price: 1.79})
//   .write()

// db.get('espaguetis')
//   .push({name: 'espaguetis', location: 'La Matanza', group: 3, carbohydrates: 11, protein: 12, lipids: 15, kcal: 23, price: 1.02})
//   .write()