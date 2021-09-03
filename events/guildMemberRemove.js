const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guildMemberRemove',
	execute(member, client) {
        const embed = new MessageEmbed()
            .setDescription(` **${member}** leaved the Server`)
            .setTimestamp()
			.setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        client.channels.cache.get('880117895680634900').send({embeds: [embed]});
	},
};