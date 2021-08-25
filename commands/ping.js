const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction, client) {
		const embed1 = new MessageEmbed()
			.setTitle(`${client.user.username} • Ping`)
			.setDescription(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
			.setTimestamp(interaction.createdAt)
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
			.setColor("#4680FC");
		interaction.reply({embeds: [embed1]});
	},
};