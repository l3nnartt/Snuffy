const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'guildMemberAdd',
	execute(client, member) {
        const embed = new MessageEmbed()
            .setDescription(` **${member}** joined the Server`)
            .setColor('#c72810')
            .setTimestamp()
            .setFooter(client.user.username, member.user.displayAvatarURL());
        client.channels.cache.get('880117895680634900').send(embed);
	},
};