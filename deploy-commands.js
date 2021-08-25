const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('avatar').setDescription('Avatar'),
	new SlashCommandBuilder().setName('beep').setDescription('beep'),
	new SlashCommandBuilder().setName('kick').setDescription('kick'),
	new SlashCommandBuilder().setName('options-info').setDescription('options-info'),
	new SlashCommandBuilder().setName('ping').setDescription('ping'),
	new SlashCommandBuilder().setName('prune').setDescription('prune'),
	new SlashCommandBuilder().setName('servers').setDescription('servers'),
	new SlashCommandBuilder().setName('user-info').setDescription('user-info'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully registered application commands.');
	} catch (error) {
		console.error(error);
	}
})();