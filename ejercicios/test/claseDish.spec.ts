import 'mocha';
import {expect} from 'chai';

import {Ingredient} from '../src/practica-7'; // El nombre hay que cambiarlo.
import {tipoPlato} from '../src/claseDish';
import {topoPlato} from '../src/claseDish';
import {Dish} from '../src/claseDish';

describe('Test block class Dish', () => {
  const tomates = new Ingredient('tomates', 'La Matanza', 4, 1, 2, 3, 32, 1.02);
  const ajos = new Ingredient('ajos', 'La Matanza', 1, 4, 7, 8, 17, 0.62);
  const espaguetis = new Ingredient('espaguetis', 'La Matanza', 3, 1, 2, 3, 32,
    1.02);

  const plato1 = new Dish([[tomates, 12], [espaguetis, 80]],
    tipoPlato.PRIMER_PLATO);

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

    // Can't add the same ingredient two o more times.
    plato1.addIngredient([tomates, 11]);
    expect(plato1.numberOfIngredients()).equal(3);
  });
});