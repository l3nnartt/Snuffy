const fs = require('fs');
const { Client, Collection, Intents, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Moved to events folder
// client.once('ready', () => {
// 	console.log('Ready!');
// });

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, client);
	} catch (error) {
		console.error(error);
		const reply = new MessageEmbed()
			.setTitle(`${client.user.username} • Fehler`)
			.setTimestamp(interaction.createdAt)
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
			.setDescription(`Es ist ein Fehler aufgetreten. Bitte wende dich an <@398101340322136075>!`)
			.setColor("#4680FC");
		return interaction.reply({ephemeral: true, embeds: [reply]});
	}
});

client.login(token);