const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { member } = require('../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Display info about this server.'),
	async execute(interaction, client) {
		fetch(member, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
			const reply = new MessageEmbed()
				.setTitle(`${client.user.username} • Serverinfo`)
				.addFields(
					{ name: 'Servername:', value: `${interaction.guild.name}` },
					{ name: 'Current members:', value: `${interaction.guild.memberCount}` },
					{ name: 'Members alltime', value: `${data.member}` },
					{ name: 'Server created:', value: `${new Date(interaction.guild.createdTimestamp).toLocaleDateString()} ${new Date(interaction.guild.createdTimestamp).toLocaleTimeString()}` }
				)
				.setTimestamp(interaction.createdAt)
				.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
			return interaction.reply({embeds: [reply]});
		})
	},
};