import 'mocha';
import {expect} from 'chai';
import {ingredientGroups} from '../src/classIngredient';
import {NutritionalComposition} from '../src/classIngredient';
import {Ingredient} from '../src/classIngredient'; 

describe('Test block class Ingredient', () => {
  const tomates = new Ingredient('tomates', 'La Matanza', 4, 16, 12, 18, 32, 1.02);
  const ajos = new Ingredient('ajos', 'La Orotava', 1, 22, 24, 26, 17, 0.62);
  const albahaca = new Ingredient('albahaca', 'Tegueste', 1, 32, 40, 16, 9, 1.79);
  const espaguetis = new Ingredient('espaguetis', 'La Matanza', 3, 11, 12, 15, 32, 1.02);
  let IngredientGroups: ingredientGroups;
  let nutritionalComposition: NutritionalComposition[];
  nutritionalComposition = [["carbohydrates", tomates.getCarbohydrates()], ["protein", tomates.getLipids()], ["lipids", tomates.getProteins()]];

  it('getGroup is "4" ', () => {
    expect(tomates.getGroup()).to.be.equal(4);
  });

  it('getName is "ajos" ', () => {
  expect(ajos.getName()).to.be.equal('ajos');
  });

  it('getLocation is "Tegueste" ', () => {
    expect(albahaca.getLocation()).to.be.equal('Tegueste');
  });

  it('getKcal is "32" ', () => {
    expect(espaguetis.getKcal()).to.be.equal(32);
  });

  it('getPrice is "1.02" ', () => {
    expect(tomates.getPrice()).to.be.equal(1.02);
  });
});
