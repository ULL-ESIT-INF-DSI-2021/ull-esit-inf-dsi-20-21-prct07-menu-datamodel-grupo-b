import 'mocha';
import {expect} from 'chai';

import {Ingredient} from '../src/practica-7'; // El nombre hay que cambiarlo.
import {tipoPlato} from '../src/claseDish';
import {topoPlato} from '../src/claseDish';
import {Dish} from '../src/claseDish';

describe('Test block class Dish', () => {
  const tomate = new Ingredient('tomate', 'La Matanza', 4, 1, 2, 3, 32, 1.02);
  const espaguetis = new Ingredient('espaguetis', 'La Matanza', 3, 1, 2, 3, 32,
    1.02);

  const plato1 = new Dish([[tomate, 12], [espaguetis, 80]],
    tipoPlato.PRIMER_PLATO);

  it('DishType gets "PRIMER_PLATO"', () => {
    expect(plato1.getDishType()).to.be.equal(tipoPlato.PRIMER_PLATO);
    expect(plato1.getDishType()).to.be.equal(1);
  });
});
