//import dishes from '../dishes.json';

let inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'choose',
      message: '¿Qué desea?',
      default: 'Ver menu',
      choices: [
        'Ver menu',
        'Realizar una comanda',
        'Solicitar un menú personalizado',
      ],
    },
   
  ])
  .then((answer: string) => {
    console.log('Answer: ', answer);
    if(answer === 'Ver menu'){
      
    }
  });

