import inquirer from 'inquirer';

export default async function chooseVuetifyComponent() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'component',
      message: 'Choose a Vuetify Component?',
      choices: [
        {
          name: 'LazyCardImage.vue',
          value: 'LazyCardImage.vue',
          short: "You Chose LazyCardImage",
        },
      ]
    },
  ]);
  return answer.component;
}
