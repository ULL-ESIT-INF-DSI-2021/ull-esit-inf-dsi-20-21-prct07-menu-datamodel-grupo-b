import 'mocha';
import {expect} from 'chai';

import {Dish} from '../src/claseDish';
import {tipoPlato} from '../src/claseDish';
import {Ingredient} from '../src/classIngredient';
import {Menu} from '../src/classMenu';
import {MenuList} from '../src/classMenuList';

describe('Test block class MenuList', () => {
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

  const menu1 = new Menu([dish2, dish1, dish4, dish5]);
  const menu2 = new Menu([dish2, dish1, dish3, dish5]);
  const menu3 = new Menu([dish2, dish4, dish5]);

  const menuList = new MenuList([menu1, menu2], [dish1, dish2, dish3, dish4, dish5], [ingr1, ingr2, ingr3, ingr4, ingr5]);

  it('getMenus in menuList', () => {
    expect(menuList.getMenus()).to.have.members([menu1, menu2]);
  });

  it('getDishes in menuList', () => {
    expect(menuList.getDishes()).to.have.members([dish1, dish2, dish3, dish4, dish5]);
  });

  it('add menu in menuList', () => {
    menuList.addMenu(menu3);
    expect(menuList.getMenus()).to.have.members([menu1, menu2, menu3]);
  });

  it('add dish in menuList', () => {
    menuList.addDish(dish6);
    expect(menuList.getDishes()).to.have.members([dish1, dish2, dish3, dish4, dish5, dish6]);
  });

  // it('create a menu in menuList', () => {
  //   // We can't compare the menus directly because the new menu is
  //   // a different object that is created inside the MenuList class
  //   // so we compare the dishes inside the menu instead
  //   menuList.newMenu([2, 6, 3]);
  //   expect(menuList.getMenus()[3].getDishes()).to.have.members([dish2, dish6, dish3]);
  // });
});
