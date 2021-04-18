import inquirer = require("inquirer");

inquirer.
  prompt([
    {
      type: 'list',
      name: 'choose',
      message: '¿Qué desea?',
      default: 'Ver menu',
      choices: [
        'Ver menu',
        'Realizar una comanda',
        'Solicitar un menu personalizado',
      ],
    },
  ])
  .then((answer: string) => {
    if(answer === 'Ver menu'){
      
    }
  });
