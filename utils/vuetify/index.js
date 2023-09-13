import inquirer from 'inquirer';
import chooseVuetifyComponent from './components/index.js';


export default async function chooseVuetifyType() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Choose a Vuetify Type?',
      choices: [
        {
          name: 'Components',
          value: 'components',
          short: "You Chose Components",
        },
      ]
    },
  ]);

  if (answer.type === 'components') {
    return `${answer.type}/${await chooseVuetifyComponent()}`;
  };
}
