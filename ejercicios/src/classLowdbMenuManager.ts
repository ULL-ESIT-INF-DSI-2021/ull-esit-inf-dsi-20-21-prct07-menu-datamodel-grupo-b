import {lowdbManager} from './classLowdbManager';
import {Ingredient} from './classIngredient';
import {Dish} from './claseDish';
import {Menu} from './classMenu';
import {tipoPlato} from './claseDish';
import {parse} from 'node:path';

//==============================================================================
export class lowdbMenuManager extends lowdbManager {
  constructor(jsonFileName: string) {
    super(jsonFileName);
  }

  addDefaults(mainEntryName: string):void {
    // Create a default entry that will contain all the ingredients 
    let textToParse = `{"${mainEntryName}": []}`;
    // We have to parse the string to the format that uses JSON with
    // JSON.pase() function
    let parsedText = JSON.parse(textToParse);

    /*
    this.db99.defaults(parsedText)
      .write()
    */

    this.db99.defaults({Menus: []})
      .write()
  }

  // Insert an object's Menu class an insert it in the JSON file
  addIngredientToJSON(menu: Menu):void {
    // TODO CAMBIARLO
    this.db99.get('Menus')
    .push({dishes: menu.getDishes()})
    .write()
    /*
    this.db99.get('Menus')
    .push({name: ingr.getName(), location: ingr.getLocation(),
      group: ingr.getGroup(), carbohydrates: ingr.getCarbohydrates(),
      proteins: ingr.getProteins(), lipids: ingr.getLipids(),
      kcal: ingr.getKcal(), price: ingr.getPrice()})
    .write()
    */
  }

  retrieveMenuFromJSON(ingredientName: string): string{
    // const database = this.low99(new this.FileSync99(this.fileName));

    /*
    console.log(this.db99.get('Menus')
      .find({name: 'tomates'})
      .value());
    */

    let objeto = this.db99.get('Menus')
      .find({name: ingredientName})
      .value();

    return objeto;
  }

  retrieveAllMenusFromJSON(): string{
    return this.db99.get("Menus").value();
  }

  removeMenuFromJSON(ingredientName: string): void {
    let textToParse = `{"name": "${ingredientName}"}`;
    // We have to parse the string to the format that uses JSON with
    // JSON.pase() function
    let parsedText = JSON.parse(textToParse);

    this.db99.get('Menu')
    .remove(parsedText)
    .write()


    /*
    db.get('Ingredients')
    .remove({name: ingredientName'})
    .write()
    */
  }
}

const tomates = new Ingredient('tomates', 'La Matanza', 4, 16, 12, 18, 32, 1.02);
const ajos = new Ingredient('ajos', 'La Orotava', 1, 22, 24, 26, 17, 0.62);
const albahaca = new Ingredient('albahaca', 'Tegueste', 1, 32, 40, 16, 9, 1.79);
const espaguetis = new Ingredient('espaguetis', 'La Matanza', 3, 11, 12, 15,
  32, 1.02);

const plato1 = new Dish('Espaguetis en salsa', [[tomates, 12],
  [espaguetis, 80]], tipoPlato.PRIMER_PLATO);
const plato2 = new Dish('Tomates aliñados', [[tomates, 175]],
  tipoPlato.ENTRANTE);

const menu1 = new Menu([plato1, plato2]);


// gestorIngredientes.addIngredientToJSON(tomates);
// gestorIngredientes.addIngredientToJSON(espaguetis);

// console.log(gestorIngredientes.retrieveIngredientFromJSON('tomates'));

// console.log(gestorIngredientes.retrieveAllIngredientsFromJSON());

/*
let gestorPlatos = new lowdbDishManager('borrame2.json');
gestorPlatos.addDefaults('d');
*/

//gestorPlatos.addDishToJSON(plato1);
// gestorPlatos.addDishToJSON(plato2);
//console.log(gestorPlatos.retrieveDishFromJSON('Espaguetis en salsa'));

let gestorMenus = new lowdbMenuManager('borrame3.json');
gestorMenus.addDefaults('Menus');