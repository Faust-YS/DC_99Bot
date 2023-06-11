const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTExNzQ2NjEyMTE3MjQxODY5MQ.Gpa6fn.dXlepNKiLuCmLVNywWvmhk1BT99NMhrhphHEwA');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands("1117466121172418691","969585213892067379"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();