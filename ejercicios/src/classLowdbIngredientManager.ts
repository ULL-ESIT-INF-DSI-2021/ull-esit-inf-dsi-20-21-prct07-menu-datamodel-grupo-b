// vamos a probar añadir y traer ingredientes del JSON con una clase

import {lowdbManager} from './classLowdbManager';
import {Ingredient} from './classIngredient';
import {Dish} from './claseDish';
import {tipoPlato} from './claseDish';
import {parse} from 'node:path';

//==============================================================================
export class lowdbIngredientManager extends lowdbManager {
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

    this.db99.defaults({Ingredients: []})
      .write()
  }

  // Insert an object's Ingredient class an insert it in the JSON file
  addIngredientToJSON(ingr: Ingredient):void {
    this.db99.get('Ingredients')
    .push({name: ingr.getName(), location: ingr.getLocation(),
      group: ingr.getGroup(), carbohydrates: ingr.getCarbohydrates(),
      proteins: ingr.getProteins(), lipids: ingr.getLipids(),
      kcal: ingr.getKcal(), price: ingr.getPrice()})
    .write()
  }

  retrieveIngredientFromJSON(ingredientName: string): string{
    // const database = this.low99(new this.FileSync99(this.fileName));

    /*
    console.log(this.db99.get('Ingredients')
      .find({name: 'tomates'})
      .value());
    */

    let objeto = this.db99.get('Ingredients')
      .find({name: ingredientName})
      .value();

    return objeto;
  }

  retrieveAllIngredientsFromJSON(): string{
    return this.db99.get("Ingredients").value();
  }

  removeIngredientFromJSON(ingredientName: string): void {
    let textToParse = `{"name": "${ingredientName}"}`;
    // We have to parse the string to the format that uses JSON with
    // JSON.pase() function
    let parsedText = JSON.parse(textToParse);

    this.db99.get('Ingredients')
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


let gestorIngredientes = new lowdbIngredientManager('borrame.json');

gestorIngredientes.addDefaults('Ingredients');

 // gestorIngredientes.addIngredientToJSON(tomates);
 // gestorIngredientes.addIngredientToJSON(espaguetis);

// console.log(gestorIngredientes.retrieveIngredientFromJSON('tomates'));

// gestorIngredientes.removeIngredientFromJSON('tomates');

console.log(gestorIngredientes.retrieveAllIngredientsFromJSON());
