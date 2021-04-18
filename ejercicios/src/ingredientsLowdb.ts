const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('ingredients.json');
const db = low(JSON.parse(adapter));

// Create a default entry that will contain all the ingredients 
db.defaults({ingredient: []})
  .write()

// Add a ingredient. Look for 'ingredient' entry, previously added, and insert
// the ingredient inside it.
db.get('ingredient')
  .push({name: 'tomates', location: 'La Matanza', group: 4, carbohydrates: 16, proteins: 12, lipids: 18, kcal: 32, price: 1.02})
  .write()

db.get('ingredient')
  .push({name: 'ajos', location: 'La Orotava', group: 1, carbohydrates: 22, protein: 24, lipids: 26, kcal: 17, price: 0.62})
  .write()

db.get('ingredient')
  .push({name: 'albahaca', location: 'Tegueste', group: 1, carbohydrates: 32, protein: 40, lipids: 16, kcal: 9, price: 1.79})
  .write()

db.get('ingredient')
  .push({name: 'espaguetis', location: 'La Matanza', group: 3, carbohydrates: 11, protein: 12, lipids: 15, kcal: 23, price: 1.02})
  .write()

db.get('ingredient')
  .push({name: 'almendra', location: 'Los Realejos', group: 4, carbohydrates: 10, protein: 9, lipids: 11, kcal: 41, price: 0.62})
  .write()

db.get('ingredient')
  .push({name: 'arroz', location: 'La Perdoma', group: 2, carbohydrates: 72, protein: 15, lipids: 0.75, kcal: 105, price: 2.50})
  .write()

db.get('ingredient')
  .push({name: 'cereales', location: 'Puerto de la Cruz', group: 4, carbohydrates: 81, protein: 10, lipids: 1, kcal: 341, price: 1.74})
  .write()

db.get('ingredient')
  .push({name: 'churros', location: 'La Victoria', group: 4, carbohydrates: 40, protein: 45, lipids: 12, kcal: 361, price: 2.54})
  .write()

db.get('ingredient')
  .push({name: 'lasaña', location: 'EL toscal', group: 1, carbohydrates: 74, protein: 12, lipids: 5, kcal: 371, price: 8.59})
  .write()

db.get('ingredient')
  .push({name: 'arepas', location: 'Santa ursula', group: 1, carbohydrates: 150, protein: 200, lipids: 5, kcal: 562, price: 2.90})
  .write()

db.get('ingredient')
  .push({name: 'macarrones', location: 'La laguna', group: 3, carbohydrates: 142, protein: 12, lipids: 4, kcal: 245, price: 1.04})
  .write()

db.get('ingredient')
  .push({name: 'pizza', location: 'La orotava', group: 1, carbohydrates: 250, protein: 124, lipids: 41, kcal: 575, price: 2.45})
  .write()

db.get('ingredient')
  .push({name: 'pechugas', location: 'Tacoronte', group: 2, carbohydrates: 100, protein: 250, lipids: 4, kcal: 324, price: 2.78})
  .write()

db.get('ingredient')
  .push({name: 'empanadillas', location: 'Sauzal', group: 1, carbohydrates: 45, protein: 100, lipids: 2, kcal: 450, price: 0.51})
  .write()

db.get('ingredient')
  .push({name: 'croquetas', location: 'Cruz santa', group: 1, carbohydrates: 14, protein: 78, lipids: 15, kcal: 145, price: 0.25})
  .write()

db.get('ingredient')
  .push({name: 'ensaladilla', location: 'Santa Cruz', group: 1, carbohydrates: 145, protein: 42, lipids: 4, kcal: 256, price: 4.60})
  .write()

db.get('ingredient')
  .push({name: 'queso', location: 'Candelaria', group: 3, carbohydrates: 10, protein: 24, lipids: 50, kcal: 354, price: 2.48})
  .write()

db.get('ingredient')
  .push({name: 'potaje', location: 'Tabaiba', group: 2, carbohydrates: 100, protein: 45, lipids: 2, kcal: 412, price: 4.21})
  .write()

db.get('ingredient')
  .push({name: 'salchichas', location: 'Tacoronte', group: 1, carbohydrates: 147, protein: 78, lipids: 7, kcal: 145, price: 1.06})
  .write()

db.get('ingredient')
  .push({name: 'leche evaporada entera', location: 'Tejina', group: 3, carbohydrates: 10, protein: 6.8, lipids: 7.56, kcal: 135, price: 1.18})
  .write()

db.get('ingredient')
  .push({name: 'natillas de chocolate', location: 'La Laguna', group: 3, carbohydrates: 20.6, protein: 3.6, lipids: 4.2, kcal: 135, price: 1.60})
  .write()

db.get('ingredient')
  .push({name: 'patatas', location: 'Tabaiba', group: 2, carbohydrates: 18, protein: 2.5, lipids: 0.2, kcal: 500, price: 1.2})
  .write()

db.get('ingredient')
  .push({name: 'aceitunas', location: 'Candelaria', group: 2, carbohydrates: 412, protein: 86, lipids: 14, kcal: 75, price: 1.54})
  .write()

db.get('ingredient')
  .push({name: 'chorizo', location: 'Adeje', group: 1, carbohydrates: 145, protein: 200, lipids: 1, kcal: 450, price: 2.75})
  .write()

db.get('ingredient')
  .push({name: 'fresa', location: 'La guancha', group: 5, carbohydrates: 147, protein: 75, lipids: 2, kcal: 356, price: 2.68})
  .write()

db.get('ingredient')
  .push({name: 'pimiento', location: 'Tabaiba', group: 2, carbohydrates: 3.5, protein: 1.6, lipids: 0.8, kcal: 100, price: 1.5})
  .write()

db.get('ingredient')
  .push({name: 'jamon serrano', location: 'Tabaiba', group: 1, carbohydrates: 0, protein: 31, lipids: 13, kcal: 4124, price: 15.5})
  .write()

db.get('ingredient')
  .push({name: 'anchoa', location: 'Tabaiba', group: 1, carbohydrates: 0, protein: 17.6, lipids: 6.3, kcal: 800, price: 22})
  .write()

db.get('ingredient')
  .push({name: 'Gambas', location: 'Vilaflor', group: 1, carbohydrates: 0, protein: 20.1, lipids: 1.4, kcal: 93, price: 1.36})
  .write()

db.get('ingredient')
  .push({name: 'chocolate', location: 'Tegueste', group: 1, carbohydrates: 32, protein: 40, lipids: 16, kcal: 9, price: 1.79})
  .write()

db.get('ingredient')
  .push({name: 'repollo chino', location: 'Arona', group: 2, carbohydrates: 2.5, protein: 0.8, lipids: 0.4, kcal: 19, price: 0.59})
  .write()

db.get('ingredient')
  .push({name: 'rucula', location: 'Candelaria', group: 2, carbohydrates: 3.7, protein: 2.6, lipids: 0.66, kcal: 34, price: 0.99})
  .write()

db.get('ingredient')
  .push({name: 'coliflor', location: 'Güimar', group: 2, carbohydrates: 3.1, protein: 2.2, lipids: 0.2, kcal: 27, price: 0.54})
  .write()

db.get('ingredient')
  .push({name: 'salchichas vegetales', location: 'Candelaria', group: 2, carbohydrates: 9.8, protein: 18.5, lipids: 18.2, kcal: 283, price: 2.99})
  .write()

db.get('ingredient')
  .push({name: 'naranja', location: 'Puerto de la Cruz', group: 4, carbohydrates: 8.6, protein: 0.8, lipids: 0, kcal: 42, price: 0.88})
  .write()

db.get('ingredient')
  .push({name: 'platano macho', location: 'Puerto de la Cruz', group: 4, carbohydrates: 31.9, protein: 1.3, lipids: 0.37, kcal: 141, price: 0.69})
  .write()

db.get('ingredient')
  .push({name: 'picota', location: 'Puerto de la Cruz', group: 4, carbohydrates: 13.5, protein: 0.8, lipids: 0.5, kcal: 65, price: 2.32})
  .write()

db.get('ingredient')
  .push({name: 'nispero', location: 'Puerto de la Cruz', group: 4, carbohydrates: 10.6, protein: 0.4, lipids: 0.5, kcal: 69, price: 1.58})
  .write()

db.get('ingredient')
  .push({name: 'sandia', location: 'Los Realejos', group: 4, carbohydrates: 4.5, protein: 0.4, lipids: 0, kcal: 21, price: 0.53})
  .write()

db.get('ingredient')
  .push({name: 'piña', location: 'Tacoronte', group: 4, carbohydrates: 11.5, protein: 0.5, lipids: 0, kcal: 50, price: 2.53})
  .write()

db.get('ingredient')
  .push({name: 'coco fresco', location: 'Tacoronte', group: 4, carbohydrates: 3.7, protein: 3.2, lipids: 36, kcal: 373, price: 3.67})
  .write()

db.get('ingredient')
  .push({name: 'bacalao', location: 'Tabaiba', group: 1, carbohydrates: 0, protein: 17.7, lipids: 0.4, kcal: 4124, price: 40})
  .write()

db.get('ingredient')
  .push({name: 'cebolla', location: 'Tabaiba', group: 2, carbohydrates: 7, protein: 1.2, lipids: 0, kcal: 60, price: 0.8})
  .write()

db.get('ingredient')
  .push({name: 'tocino iberico', location: 'Tabaiba', group: 1, carbohydrates: 0, protein: 8.4, lipids: 71, kcal: 673, price: 12.95})
  .write()

db.get('ingredient')
  .push({name: 'cuajada', location: 'Tabaiba', group: 3, carbohydrates: 6.7, protein: 4.8, lipids: 5.3, kcal: 600, price: 3.55})
  .write()

db.get('ingredient')
  .push({name: 'panceta', location: 'Tabaiba', group: 1, carbohydrates: 0, protein: 12.5, lipids: 46.6, kcal: 469, price: 6.5})
  .write()

db.get('ingredient')
  .push({name: 'helado', location: 'Tabaiba', group: 3, carbohydrates: 25.4, protein: 4.5, lipids: 10.1, kcal: 1500, price: 2.8})
  .write()

db.get('ingredient')
  .push({name: 'solomillo de buey', location: 'Tabaiba', group: 1, carbohydrates: 0, protein: 18.2, lipids: 3.5, kcal: 104, price: 86.90})
  .write()
  
db.get('ingredient')
  .push({name: 'huevo', location: 'Tabaiba', group: 1, carbohydrates: 0.7, protein: 12.5, lipids: 11.1, kcal: 200, price: 5.2})
  .write()

db.get('ingredient')
  .push({name: 'rabo de toro', location: 'Nacional', group: 1, carbohydrates: 0, protein: 18.6, lipids: 14, kcal: 200, price: 12.9})
  .write()

db.get('ingredient')
  .push({name: 'coliflor', location: 'Tabaiba', group: 2, carbohydrates: 3.1, protein: 2.2, lipids: 0.2, kcal: 35, price: 2.5})
  .write()

db.get('ingredient')
  .push({name: 'pato', location: 'Tabaiba', group: 1, carbohydrates: 0, protein: 22, lipids: 14, kcal: 214, price: 9.49})
  .write()

db.get('ingredient')
  .push({name: 'lechuga', location: 'Tabaiba', group: 2, carbohydrates: 1.4, protein: 1.34, lipids: 0.2, kcal: 50, price: 0.8})
  .write()

db.get('ingredient')
  .push({name: 'esparrago', location: 'Tabaiba', group: 2, carbohydrates: 1.5, protein: 4, lipids: 2, kcal: 30, price: 4.2})
  .write()

