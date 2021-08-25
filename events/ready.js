module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);

		setInterval(() => {
			const activities = [
				`github.com/l3nartt/snuffy`,
				`${client.guilds.cache.reduce((a, g) => a + g.memberCount,0)} Mitglieder`
			];
			let activity = activities[Math.floor(Math.random() * activities.length)];
			client.user.setActivity(activity,
				{type: "PLAYING"}
			);
  		},15000);
	},
};