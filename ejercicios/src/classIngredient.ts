/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Desarrollo de sistemas
  * Curso: 3º
  * Editor: Visual Studio Code
  *
  * @file classIngredient.ts
  * @version 1.0
  * @author Grupo B
  * @date 7 de Abril 2021
  * @brief Data model of a system that allows menu design
*/

/**
 * @brief For each ingredient considered within the menu design system, the following information must be stored:
 * @brief group1: meat, fish, eggs, tofu, nuts, seeds, and legumes
 * @brief group2: Vegetables and greens
 * @brief group3: Milk and derivatives
 * @brief group4: Cereals
 * @brief group5: Fruits
 */
export enum ingredientGroups {group1, group2, group3, group4, group5};

/**
 * @brief String --> Macronutrients: Carbohydrates, proteins and lipids.
 * @brief number --> kcal
 */
export type NutritionalComposition = [string, number];

/**
 * @brief Class that create an ingredient
 */
export class Ingredient {
    private nutritionalComposition: NutritionalComposition[];

    /**
     * @brief Constructor of the class ingredient
     * @param name Ingredient name
     * @param location Ingredient location
     * @param group Food group which the ingredient belongs
     * @param carbohydrates Macronutrient
     * @param protein Macronutrient
     * @param lipids Macronutrient
     * @param kcal Ingredient kilocalories
     * @param price Ingredient price
     */

  constructor(
        private name: string,
        private location: string,
        private group: ingredientGroups,
        private carbohydrates: number,
        private protein: number,
        private lipids: number,
        private kcal: number,
        private price: number,
    ) {
        this.nutritionalComposition = [["carbohydrates", carbohydrates], ["protein", protein], ["lipids", lipids]];
    }

    /**
     *  @brief Get private attribute Name
     */
    getName() {
        return this.name;
    }

    /**
     *  @brief Get private attribute location
     */
    getLocation() {
        return this.location;
    }

    /**
     *  @brief Get private attribute Group
     */
    getGroup() {
        return this.group;
    }

    /**
     *  @brief Get private attribute Proteins
     */ 
    getProteins() {
        return this.protein;
    }

    /**
     *  @brief Get private attribute Carbohydrates
     */ 
    getCarbohydrates() {
        return this.carbohydrates;
    }

    /**
     *  @brief Get private attribute Lipids
     */
    getLipids() {
        return this.lipids;
    }

    /**
     *  @brief Get private attribute Kcal
     */
    getKcal() {
        return this.kcal;
    }

    /**
     *  @brief Get private attribute Price
     */ 
    getPrice() {
        return this.price;
    }
}
