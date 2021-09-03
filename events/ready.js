module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		//Start Log
		console.log(`Ready! Logged in as ${client.user.tag}`);

		//RPC
		setInterval(() => {
			let activity = `${client.guilds.cache.reduce((a, g) => a + g.memberCount,0)} Members`;
			client.user.setActivity(activity,
				{ type: "PLAYING" }
			);
  		},15000);
	},
};