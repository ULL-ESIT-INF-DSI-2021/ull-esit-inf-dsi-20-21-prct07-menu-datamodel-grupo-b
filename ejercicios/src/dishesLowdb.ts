const low2 = require('lowdb');
const FileSync2 = require('lowdb/adapters/FileSync');

const adapter2 = new FileSync2('dishes.json');
const db2 = low2(adapter2);

// Create a default entry that will contain all the dishes 
db2.defaults({dishes: []})
  .write()

// Add a dish. Look for 'dishes' entry, previously added, and insert
// the dish inside it.
db2.get('dishes')
  .push({name: 'Tomates aliñados', ingredients: [['tomates', 175]],
    tipoPlato: 'ENTRANTE'})
  .write()

db2.get('dishes')
  .push({name: 'Huevos estrellados', ingredients: [['huevo', 175],
    ['patatas', 300]], tipoPlato: 'ENTRANTE'})
  .write()

db2.get('dishes')
  .push({name: 'Tapa de anchoas y aceitunas', ingredients: [['anchoas', 50],
    ['aceitunas', 50]], tipoPlato: 'ENTRANTE'})
  .write()
  
db2.get('dishes')
  .push({name: 'Ensaladilla con croquetas', ingredients: [['ensaladilla', 100],
    ['croquetas', 100]], tipoPlato: 'ENTRANTE'})
  .write()

db2.get('dishes')
  .push({name: 'Tocino frito', ingredients: [['tocino iberico', 125]],
    tipoPlato: 'ENTRANTE'})
  .write()

db2.get('dishes')
  .push({name: 'Ensalada', ingredients: [['lechuga', 80], ['esparragos', 40],
    ['tomate', 40]], tipoPlato: 'ENTRANTE'})
  .write()

db2.get('dishes')
  .push({name: 'Queso frito', ingredients: [['queso', 80]],
    tipoPlato: 'ENTRANTE'})
  .write()

db2.get('dishes')
  .push({name: 'huevos rellenos', ingredients: [['huevos', 100],
    ['bacalao', 50]], tipoPlato: 'ENTRANTE'})
  .write()
  
db2.get('dishes')
  .push({name: 'Espaguetis en salsa', ingredients: [['tomates', 12],
  ['espaguetis', 80]], tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Crema de coliflor', ingredients: [['coliflor', 75],
  ['leche evaporada entera', 200]], tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Sopa simple de cereales', ingredients: [['cereales', 275],
  ['huevo', 75]], tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Bacalao encebollado', ingredients: [['bacalao', 120],
  ['cebolla', 80]], tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Potaje', ingredients: [['potaje', 200]],
    tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Popurri', ingredients: [['anchoas', 200], ['aceitunas', 50],
    ['tomate', 60]], tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Empanadillas', ingredients: [['empanadillas', 200]],
    tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Brochetas de gambas y bacalao', ingredients: [['gambas', 213],
    ['bacalao', 200]], tipoplato: 'PRIMER_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Chorizo con patatas', ingredients: [['chorizo', 200],
    ['patatas', 300]], tipoplato: 'SEGUNDO_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Repollos rellenos de anchoas', ingredients: [['anchoas', 160],
    ['repollo chino', 320]], tipoplato: 'SEGUNDO_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Pechugas con rucula y queso', ingredients: [['pechugas', 250],
    ['rucula', 100], ['queso', 50]], tipoplato: 'SEGUNDO_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Vegisalchichas en salsa de coco',
    ingredients: [['salchicas vegetales', 250],
    ['coco', 100]], tipoplato: 'SEGUNDO_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Bacalao en salsa de pimientos', ingredients: [['bacalao', 250],
    ['pimiento', 100], ['leche evaporada entera', 50]],
    tipoplato: 'SEGUNDO_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Verduras asadas', ingredients: [['repollo chino', 60],
    ['pimiento', 65], ['patatas', 150], ['rucula', 25], ['coliflor', 20]],
    tipoplato: 'SEGUNDO_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Rabo de toro', ingredients: [['rabo de toro', 60],
    ['pimiento', 143], ['patatas', 200], ['cebolla', 38]],
    tipoplato: 'SEGUNDO_PLATO'})
  .write();

db2.get('dishes')
  .push({name: 'Pato a la naranja', ingredients: [['pato', 168],
    ['naranja', 55]], tipoplato: 'SEGUNDO_PLATO'})
  .write();
  
db2.get('dishes')
  .push({name: 'Churros con chocolate', ingredients: [['churros', 200],
  ['chocolate', 95]], tipoplato: 'POSTRE'})
  .write();
  
db2.get('dishes')
  .push({name: 'Natilla chocolate',
    ingredients: [['natillas de chocolate', 175], ['fresa', 25]],
    tipoPlato: 'POSTRE'})
  .write()
  
db2.get('dishes')
  .push({name: 'Piña natural', ingredients: [['piña', 200]],
    tipoPlato: 'POSTRE'})
  .write()

db2.get('dishes')
  .push({name: 'Tarta de nisperos', ingredients: [['nispero', 200],
    ['huevo', 50], ['cereales', 100]], tipoPlato: 'POSTRE'})
  .write()

db2.get('dishes')
  .push({name: 'Macedonia de frutas', ingredients: [['nispero', 200],
    ['sandia', 75], ['coco fresco', 65]], tipoPlato: 'POSTRE'})
  .write()

db2.get('dishes')
  .push({name: 'Cuajada de cerezas', ingredients: [['cuajada', 250],
    ['picota', 75]], tipoPlato: 'POSTRE'})
  .write()

db2.get('dishes')
  .push({name: 'Arroz con leche', ingredients: [['arroz', 450],
    ['leche evaporada entera', 750]], tipoPlato: 'POSTRE'})
  .write()

db2.get('dishes')
  .push({name: 'Platanos flambeados en jugo de naranja',
    ingredients: [['platano macho', 450], ['naranja', 750]],
    tipoPlato: 'POSTRE'})
  .write()