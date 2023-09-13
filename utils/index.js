import inquirer from 'inquirer';
import chooseVuetifyType from './vuetify/index.js';

export default async function chooseTool() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'tool',
      message: 'Choose a Tool?',
      choices: [
        {
          name: 'Vuetify',
          value: 'vuetify',
          short: "You Chose Vuetify",
        },
      ]
    },
  ]);

  if (answer.tool === 'vuetify') {
    return `${answer.tool}/${await chooseVuetifyType()}`;
  };
}
