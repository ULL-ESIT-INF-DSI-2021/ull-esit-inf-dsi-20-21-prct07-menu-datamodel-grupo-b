import 'mocha';
import {expect} from 'chai';

import {Dish} from '../src/claseDish';
import {tipoPlato} from '../src/claseDish';
import {Ingredient} from '../src/classIngredient';
import {Menu} from '../src/classMenu';

describe('Test block class Menu', () => {
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
    const menu2 = new Menu([dish2, dish1, dish3, dish5]);
  
  
    it('getPrice in menu1', () => {
      expect(menu1.getprice()).to.be.equal('1.15');
    });

    it('getNutritionalComposition in menu2', () => {
      expect(menu2.nutritionalComposition()).to.have.members([ 150.72, 172.04, 101.66 ]);
    });
  
    it('foodGroupList in menu1', () => {
      expect(menu1.foodGroupList()).to.have.members([ 4, -1, 3, 1 ]);
    });
  });
  
