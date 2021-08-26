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
				{ name: 'Current members:', value: `${interaction.guild.memberCount}` },
				{ name: 'Members alltime', value: `COMING SOON` },
				{ name: 'Server created:', value: `${interaction.guild.createdAt}` }
			)
			.setTimestamp(interaction.createdAt)
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
			.setColor("#4680FC");
		return interaction.reply({embeds: [reply]});
	},
};