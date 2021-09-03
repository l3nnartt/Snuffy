const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guildMemberAdd',
	execute(member, client) {
        const embed = new MessageEmbed()
            .setDescription(` **${member}** joined the Server \n\n #${client.guilds.cache.reduce((a, g) => a + g.memberCount,0)}\'s Member`)
            .setColor('GREEN')
            .setTimestamp()
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        client.channels.cache.get('883344926090362940').send({embeds: [embed]});
	},
};