import {Dish, tipoPlato} from './claseDish';
import {Commanda} from './classComanda';
import {Ingredient, ingredientGroups} from './classIngredient';
//import {IngredientJSON, DishJSON, MenuJSON} from './SchemasJSON'
import {Menu} from './classMenu';
import {MenuList} from './classMenuList';
import {CustomerOrder} from './classOrder';
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

// type schemaType = {
//   Ingredients: { name: string, ingredient: Ingredient } [],
//   Dishes: { id: string, dish: Dish } [],
//   Menus: { id: number, dishes: Dish[] } []
// }
type schemaType = {
  Ingredients: { name: string, ingredient: Ingredient } [],

  Dishes: { 
    dishName: string,
    ingredients: [Ingredient, number][],
    type: tipoPlato } [],

  Menus: { id: number, dishes: Dish[] } []
}


export class JsonMenuList extends MenuList {
  private database: lowdb.LowdbSync<schemaType>;
  constructor(public menu: Array<Menu> = [], public dish: Array<Dish> = [], public ingredient: Array<Ingredient> = []) {
      super([], [], []);
      this.database = lowdb(new FileSync("Todos.json"));
      if (this.database.has("Ingredients").value()) {
        let dbItems = this.database.get("Ingredients").value();
        dbItems.forEach((item: any) => this.ingredients.set(item.name, item.ingredient));
    } else {
        this.database.set("Ingredients", ingredient).write();
        ingredient.forEach(item => this.ingredients.set(item.getName(), item));
    }
      if (this.database.has("Dishes").value()) {
          let dbItems = this.database.get("Dishes").value();
          dbItems.forEach(item => this.dishes.set(item.id, item.dish));
      } else {
          this.database.set("Dishes", dish).write();
          dish.forEach(item => this.dishes.set(item.getDishName(), item));
      }
      if (this.database.has("Menus").value()) {
        let dbItems = this.database.get("Menus").value();
        dbItems.forEach(item => this.menus.set(this.numberMenus + 1, new Menu(item.dishes)));
        this.numberMenus = this.numberMenus + 1;
    } else {
        this.database.set("Menus", menu).write();
        menu.forEach(item => this.menus.set(this.numberMenus + 1, item));        
        this.numberMenus = this.numberMenus + 1;
    }
  }
  addDish(dish: Dish) {
      super.addDish(dish);
      this.storeDishes();
  }
  addMenu(menu: Menu) {
    super.addMenu(menu);
    this.storeMenus();
}
  addIngredient(ingredient: Ingredient) {
    super.addIngredient(ingredient);
    this.storeIngredient();
  }
  private storeDishes() {
      this.database.set("Dishes", [...this.dishes.values()]).write();
  }
  private storeMenus() {
    this.database.set("Menus", [...this.menus.values()]).write();
  }
  private storeIngredient() {
    this.database.set("Ingredients", [...this.ingredients.values()]).write();
  }
}