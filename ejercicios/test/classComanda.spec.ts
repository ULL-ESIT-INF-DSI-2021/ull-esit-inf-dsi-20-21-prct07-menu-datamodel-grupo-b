import 'mocha';
import { expect } from 'chai';
import { Menu } from '../src/classMenu';
import { Commanda } from '../src/classComanda';
import { CustomerOrder } from '../src/classOrder';
import { Ingredient } from '../src/classIngredient';
import { tipoPlato, Dish } from '../src/claseDish';


describe('Tests para las Comandas:', () => {
 
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

  const menu1 = new Menu([dish2, dish1, dish4, dish5]);

  const command = new Commanda([new CustomerOrder(menu1, 1)]);



});