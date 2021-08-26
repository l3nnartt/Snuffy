module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		setInterval(() => {
			let activity = `${client.guilds.cache.reduce((a, g) => a + g.memberCount,0)} Mitglieder`;
			client.user.setActivity(activity,
				{type: "PLAYING"}
			);
  		},15000);
	},
};