const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Display info about this server.'),
	async execute(interaction, client) {
		const reply = new MessageEmbed()
			.setTitle(`${client.user.username} • Serverinfo`)
			.addFields(
				{ name: 'Servername:', value: `${interaction.guild.name}` },
				{ name: 'Aktuelle Mitglieder', value: `${interaction.guild.memberCount}` },
				{ name: 'Server Erstellt:', value: `${interaction.guild.createdAt.toDateString()}` }
			)
			.setTimestamp(interaction.createdAt)
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
			.setColor("#4680FC");
		return interaction.reply({embeds: [reply]});
	},
};