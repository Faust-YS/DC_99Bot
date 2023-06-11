const { Client, GatewayIntentBits,ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const { botToken } = require("./utils/config.js");

client.on('ready', () => {
    client.user.setActivity('99', { type: ActivityType.Playing });
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(botToken);