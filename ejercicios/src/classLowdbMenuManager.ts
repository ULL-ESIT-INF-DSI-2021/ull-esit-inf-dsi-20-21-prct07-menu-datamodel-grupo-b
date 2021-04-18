// Clase que inserta Menus en un fichero JSON (parseandolo) y también devuelve
// la información relativa de ese fichero JSON (Está sin terminar, problemas
// con lowdb, no inserta los ingredientes de los platos, el resto de la
// información sí lo hace)


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
  addMenu(menu: Menu):void {
    // TODO CAMBIARLO
    let textToParse = '';

    let listado: Array<Dish> = menu1.getDishes();

    // 
    for(let i = 0; i < menu.getDishes().length; ++i) {
      let ingredientes = listado[i].getIngredients();

      textToParse = `{"dishes": [{`;
      textToParse += `"dishname": "${listado[i].getDishName()}",`;
      textToParse += `"plato": ${listado[i].getDishType()},`;

      textToParse += `"Ingredients": [`;
      for(let j = 0; j < ingredientes.length; ++j) {
        let ingrediente = ingredientes[j];

        if(ingrediente != undefined) {
          textToParse += `{"name": "${ingrediente[0].getName()}",`;
          textToParse += `"location": "${ingrediente[0].getLocation()}",`;
          textToParse += `"group": ${ingrediente[0].getGroup()},`;
          textToParse += `"carbohydrates": ${ingrediente[0].getCarbohydrates()},`;
          textToParse += `"protein": ${ingrediente[0].getProteins()},`;
          textToParse += `"lipids": ${ingrediente[0].getLipids()},`;
          textToParse += `"kcal": ${ingrediente[0].getKcal()},`;
          textToParse += `"price": ${ingrediente[0].getPrice()},`;
          textToParse += `"weight": ${ingrediente[1]}}`;
        }

        if (j < ingredientes.length - 1) {
          textToParse += `,`;
        }
      }
      textToParse += `]`;

      textToParse += `}]}`;

      this.db99.get('Menus')
      .push(JSON.parse(textToParse))
      .write()
    }
   
    /*
     this.db99.get('Menus')
     .get('dishes')
     .find({dishname: 'Espaguetis en salsa'})
     .assign({dishname: 'Ospogotos on solso'})
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

  removeMenuFromJSON(menuName: string): void {
    let textToParse = `{"name": "${menuName}"}`;
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

/*
console.table(menu1.getDishes());
let listado: Array<Dish> = menu1.getDishes();
console.log(listado[0]);
console.table(menu1.getprice());
*/


let gestorMenus = new lowdbMenuManager('borrame3.json');
gestorMenus.addDefaults('Menus');
gestorMenus.addMenu(menu1);
