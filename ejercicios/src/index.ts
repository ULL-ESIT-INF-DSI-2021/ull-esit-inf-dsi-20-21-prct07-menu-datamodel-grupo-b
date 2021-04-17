const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults
db.defaults({ingredient: []})
  .write()

// Add a ingredient
db.get('tomates')
  .push({name: 'tomates', location: 'La Matanza', group: 4, carbohydrates: 16, protein: 12, lipids: 18, kcal: 32, price: 1.02})
  .write()

db.get('ajos')
  .push({name: 'ajos', location: 'La Orotava', group: 1, carbohydrates: 22, protein: 24, lipids: 26, kcal: 17, price: 0.62})
  .write()

db.get('albahaca')
  .push({name: 'albahaca', location: 'Tegueste', group: 1, carbohydrates: 32, protein: 40, lipids: 16, kcal: 9, price: 1.79})
  .write()

db.get('espaguetis')
  .push({name: 'espaguetis', location: 'La Matanza', group: 3, carbohydrates: 11, protein: 12, lipids: 15, kcal: 23, price: 1.02})
  .write()