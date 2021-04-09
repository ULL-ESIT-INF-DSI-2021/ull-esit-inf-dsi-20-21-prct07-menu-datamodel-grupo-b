import 'mocha';
import {expect} from 'chai';

import {Ingredient} from '../src/practica-7'; // El nombre creo que hay que cambiarlo.
import {ingredient} from '../src/practica-7';

import {tipoPlato} from '../src/claseDish';
import {Dish} from '../src/claseDish';

describe('Test block class Dish', () => {
  const tomates = new Ingredient('tomates', 'La Matanza', 4, 16, 12, 18, 32, 1.02);
  const ajos = new Ingredient('ajos', 'La Orotava', 1, 22, 24, 26, 17, 0.62);
  const albahaca = new Ingredient('albahaca', 'Tegueste', 1, 32, 40, 16, 9, 1.79);
  const espaguetis = new Ingredient('espaguetis', 'La Matanza', 3, 11, 12, 15,
    32, 1.02);

  const plato1 = new Dish('Espaguetis en salsa', [[tomates, 12],
    [espaguetis, 80]], tipoPlato.PRIMER_PLATO);

  const plato2 = new Dish('Tomates aliñados', [[tomates, 175]],
    tipoPlato.ENTRANTE);

  it('getDishName gets "Espaguetis en salsa"', () => {
    expect(plato1.getDishName()).to.be.equal('Espaguetis en salsa');
  });

  it('getDishType gets "PRIMER_PLATO"', () => {
    expect(plato1.getDishType()).to.be.equal(tipoPlato.PRIMER_PLATO);
    expect(plato1.getDishType()).to.be.equal(1);
  });

  it('getIngredients gets [["tomates", 12], ["espaguetis", 80]], ', () => {
    let ingredients: [Ingredient, number][] = plato1.getIngredients();

    // First ingredient name 
    expect(ingredients[0][0].getName()).to.be.equal('tomates');
    // First ingredient weight
    expect(ingredients[0][1]).to.be.equal(12);

    // Second ingredient name 
    expect(ingredients[1][0].getName()).to.be.equal('espaguetis');
    // Second ingredient weight
    expect(ingredients[1][1]).to.be.equal(80);
  });

  it('numberOfIngredients gets 2', () => {
    expect(plato1.numberOfIngredients()).equal(2);
  });

  it('addIngredient() various tests', () => {
    plato1.addIngredient([ajos, 25]);
    expect(plato1.numberOfIngredients()).equal(3);

    // Can't add the same ingredient more than once. 
    plato1.addIngredient([tomates, 11]);
    expect(plato1.numberOfIngredients()).equal(3);
  });

  it('predominantGroup() various tests', () => {
    // The predominant ingrediente group is none.
    expect(plato1.predominantGroup()).to.be.equal(-1);

    plato1.addIngredient([albahaca, 28]);

    // Predominant ingredient now is 1 (vegetables and greens)
    expect(plato1.predominantGroup()).to.be.equal(1);
    expect(plato1.predominantGroup()).to.be.equal(ingredient.group2);
  });

  it('nutritionalComposition() test', () => {
    // We can use the method .within() if the values have a lot of decimals.
    expect(plato2.nutritionalComposition()).eql([28, 21, 31.5]);
  });

  it('totalPrice() gets 0.15946', () => {
    expect(plato1.totalPrice()).within(0.15946, 0.15947);
  });
});
