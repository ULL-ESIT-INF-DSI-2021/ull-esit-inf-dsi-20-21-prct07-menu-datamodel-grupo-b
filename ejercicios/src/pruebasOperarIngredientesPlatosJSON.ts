// vamos a probar añadir y traer ingredientes del JSON con una clase

import {Ingredient} from './classIngredient';
import {Dish} from './claseDish';
import {tipoPlato} from './claseDish';

//==============================================================================
export abstract class lowdbManager {
  protected readonly low99 = require('lowdb');
  protected readonly FileSync99 = require('lowdb/adapters/FileSync');
  protected adapter99: any;
  protected db99: any;
  protected mainEntryName: string = '';
  protected fileName: string = '';

  constructor(jsonFileName: string) {
    this.fileName = jsonFileName;
    this.adapter99 = new this.FileSync99(jsonFileName);
    this.db99 = this.low99(this.adapter99);
  }

  abstract addDefaults(mainEntryName: string):void;

  // 
  /*
  abstract addObjectToJSON():void {
  }

  // 
  abstract retrieveIngredientFromJSON():void {
  }
  */
}

//==============================================================================
export class lowdbIngredientManager extends lowdbManager {
  constructor(jsonFileName: string) {
    super(jsonFileName);
  }

  addDefaults(mainEntryName: string):void {
    // Create a default entry that will contain all the ingredients 
    // this.mainEntryName = mainEntryName;

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
}


//==============================================================================
export class lowdbDishManager extends lowdbManager {
  constructor(jsonFileName: string) {
    super(jsonFileName);
  }

  addDefaults(mainEntryName: string):void {
    // Create a default entry that will contain all the ingredients 
    // this.mainEntryName = mainEntryName;

    this.db99.defaults({Dishes: []})
      .write()
  }

  addDishToJSON(dish: Dish):void {
    this.db99.get('Dishes')
    .push({name: dish.getDishName(), ingredients: dish.getIngredients(),
      proteins: dish.getDishType()})
    .write()
  }

  retrieveDishFromJSON(dishName: string): string{
    // const database = this.low99(new this.FileSync99(this.fileName));

    /*
    console.log(this.db99.get('Ingredients')
      .find({name: 'tomates'})
      .value());
    */

    let objeto = this.db99.get('Dishes')
      .find({name: dishName})
      .value();

    let objeto2 = this.db99.get('Dishes');

    console.log('objeto99');
    let objeto99 = objeto2.find({name: 'Espaguetis en salsa'}).value().ingredients;
    console.log(objeto99);

    console.log('muu');
    let objeto200 = this.db99.get('Dishes')
    this.db99.forEach(objeto200, function(value:string) {console.log(value)});

    console.log('muu');
    console.log(this.db99.get('Dishes[0].name').value());
    console.log('m99');
    console.log(this.db99.get('Dishes[0].ingredients').value());
    console.log('moo');
    console.log(this.db99.get('Dishes[0].ingredients[0]').value());
    let objeto300 = this.db99.get('Dishes[0].ingredients[0].nutritionalComposition[0,1]').value();

    console.log('xi');
    let tam = this.db99.get('Dishes').size().value();
    // console.log(objeto300);

    console.log('iterador');
    for(let i = 0; i < tam; ++i) {
      console.log(this.db99.get('Dishes[' + i + '].name').value());
    }
   

    // objeto3.value().map((ingredients: Ingredient[]) => console.log(ingredients));

    /*
    loadFoods() {
      if (this.database.has('stock.foods').value()) {
        this.foods = this.database.get('stock.foods').value().map((food: JsonFood) => this.parser.parseFood(food));
      } else {
        // Sets stock.foods: []
        this.storeFoods();
      }
    }
    */

    return objeto;
  }

  retrieveAllDishesFromJSON(): string{
    return this.db99.get('Dishes').value();
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

let gestorIngredientes = new lowdbIngredientManager('borrame.json');

gestorIngredientes.addDefaults('cosa');

// gestorIngredientes.addIngredientToJSON(tomates);
// gestorIngredientes.addIngredientToJSON(espaguetis);

// console.log(gestorIngredientes.retrieveIngredientFromJSON('tomates'));

// console.log(gestorIngredientes.retrieveAllIngredientsFromJSON());

let gestorPlatos = new lowdbDishManager('borrame2.json');
gestorPlatos.addDefaults('d');

//gestorPlatos.addDishToJSON(plato1);
// gestorPlatos.addDishToJSON(plato2);
console.log(gestorPlatos.retrieveDishFromJSON('Espaguetis en salsa'));


class Parser {

}